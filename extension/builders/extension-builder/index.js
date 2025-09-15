const { createBuilder, targetFromTargetString } = require("@angular-devkit/architect");
const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const { execSync } = require("child_process");

// Interface for builder options
const builderOptionsSchema = {
    $schema: "http://json-schema.org/schema",
    type: "object",
    properties: {
        webpackConfig: {
            type: "string",
            description: "Path to webpack configuration file",
            default: "webpack.extension.config.js",
        },
        angularTarget: {
            type: "string",
            description: "Angular build target to run after webpack",
        },
        watch: {
            type: "boolean",
            description: "Enable watch mode",
            default: false,
        },
        mode: {
            type: "string",
            description: "Build mode (development/production)",
            enum: ["development", "production"],
            default: "development",
        },
    },
    required: ["angularTarget"],
    additionalProperties: false,
};

function createWebpackConfig(options, context, outputPath) {
    const configPath = path.resolve(context.workspaceRoot, options.webpackConfig || "webpack.extension.config.js");

    let config;
    if (fs.existsSync(configPath)) {
        // Clear require cache to get fresh config on each build
        delete require.cache[require.resolve(configPath)];
        config = require(configPath);

        // Handle function-style webpack configs
        if (typeof config === "function") {
            config = config({}, { mode: options.mode });
        }
    } else {
        throw new Error(`Webpack config not found at: ${configPath}`);
    }

    // Set output path to match Angular output
    config.output = config.output || {};
    config.output.path = outputPath;

    // Set mode
    config.mode = options.mode || config.mode || "development";

    // Set NODE_ENV for webpack config that might need it
    process.env.NODE_ENV = config.mode;

    return config;
}

function runAngularBuildSync(targetSpec, context) {
    return new Promise((resolve, reject) => {
        try {
            execSync(`ng build --configuration ${targetSpec.configuration}`, {
                stdio: "inherit",
                cwd: context.workspaceRoot,
            });

            console.log("✅ Angular build completed!");

            resolve({ success: true });
        } catch (error) {
            console.error("❌ Angular build failed:", error.message);

            reject(error);
        }
    });
}

function runWebpack(config) {
    return new Promise((resolve, reject) => {
        const compiler = webpack(config);

        compiler.run((err, stats) => {
            if (err) {
                reject(err);
                return;
            }

            if (stats.hasErrors()) {
                const errors = stats.toJson().errors;
                reject(new Error(`Webpack compilation errors:\n${errors.map((e) => e.message).join("\n")}`));
                return;
            }

            if (stats.hasWarnings()) {
                const warnings = stats.toJson().warnings;
                console.warn(`⚠️ Webpack compilation warnings:\n${warnings.map((w) => w.message).join("\n")}`);
            }

            console.log("✅ Extension scripts compiled successfully");
            resolve({ success: true });
        });
    });
}

function watchWebpack(config, onRebuild) {
    return new Promise((resolve, reject) => {
        const compiler = webpack(config);
        let isFirstBuild = true;

        const watcher = compiler.watch(
            {
                aggregateTimeout: 300,
                poll: undefined,
                ignored: /node_modules/,
            },
            (err, stats) => {
                if (err) {
                    if (isFirstBuild) {
                        reject(err);
                        return;
                    }
                    console.error("❌ Webpack watch error:", err.message);
                    return;
                }

                if (stats.hasErrors()) {
                    const errors = stats.toJson().errors;
                    console.error(`❌ Webpack compilation errors:\n${errors.map((e) => e.message).join("\n")}`);
                    if (isFirstBuild) {
                        reject(new Error(`Webpack compilation errors:\n${errors.map((e) => e.message).join("\n")}`));
                        return;
                    }
                    return;
                }

                if (stats.hasWarnings()) {
                    const warnings = stats.toJson().warnings;
                    console.warn(`⚠️ Webpack compilation warnings:\n${warnings.map((w) => w.message).join("\n")}`);
                }

                console.log("✅ Extension scripts compiled successfully");

                if (isFirstBuild) {
                    isFirstBuild = false;
                    resolve({ success: true, watcher });
                } else {
                    onRebuild();
                }
            }
        );
    });
}

// Export the builder
module.exports = createBuilder((options, context) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Parse the Angular target
            const targetSpec = targetFromTargetString(options.angularTarget);

            // Get Angular build target options to determine output path
            const angularTarget = await context.getTargetOptions(targetSpec);
            const outputPath = path.resolve(context.workspaceRoot, angularTarget.outputPath);

            // Create webpack config
            const webpackConfig = createWebpackConfig(options, context, outputPath);

            if (options.watch) {
                // Start Angular watch first and wait for initial build
                const { spawn } = require("child_process");

                const angularWatch = spawn("ng", ["build", "--watch", "--configuration", targetSpec.configuration], {
                    cwd: context.workspaceRoot,
                    stdio: ["pipe", "pipe", "pipe"],
                });

                let initialAngularBuildComplete = false;
                let webpackWatcher = null;

                // Timeout fallback - run webpack after 15 seconds if Angular doesn't trigger it
                const fallbackTimeout = setTimeout(() => {
                    if (!initialAngularBuildComplete) {
                        console.warn("⚠️ Angular build detection timeout, starting webpack fallback");
                        initialAngularBuildComplete = true;

                        runWebpack(webpackConfig)
                            .then(() => {
                                console.log("✅ Webpack watch active (fallback)");
                                return watchWebpack(webpackConfig, () => {});
                            })
                            .then(({ watcher }) => {
                                webpackWatcher = watcher;
                                console.log("✅ Watch mode active (fallback)");
                            })
                            .catch((error) => {
                                console.error("❌ Fallback webpack setup failed:", error.message);
                            });
                    }
                }, 15000);

                angularWatch.stdout.on("data", (data) => {
                    const output = data.toString();

                    // Show important Angular messages
                    if (output.includes("❌")) {
                        console.error(`🅰️ ${output.trim()}`);
                    } else if (output.includes("✔") || output.includes("Build at:")) {
                        console.log(`🅰️ ${output.trim()}`);
                    }

                    // When Angular build completes - try multiple patterns
                    const buildComplete =
                        (output.includes("✔") && (output.includes("bundle generation complete") || output.includes("compilation complete"))) ||
                        (output.includes("✔") && output.includes("Index html generation complete")) ||
                        output.includes("Build at:");

                    if (buildComplete && !initialAngularBuildComplete) {
                        // Clear the fallback timeout since Angular completed
                        clearTimeout(fallbackTimeout);

                        // First time - start webpack and webpack watch
                        initialAngularBuildComplete = true;

                        runWebpack(webpackConfig)
                            .then(() => {
                                console.log("✅ Webpack watch starting...");
                                return watchWebpack(webpackConfig, () => {});
                            })
                            .then(({ watcher }) => {
                                webpackWatcher = watcher;
                                console.log("✅ Watch mode active!");
                            })
                            .catch((error) => {
                                console.error("❌ Initial webpack setup failed:", error.message);
                            });
                    } else if (buildComplete && initialAngularBuildComplete) {
                        // Subsequent Angular rebuilds - re-run webpack
                        runWebpack(webpackConfig).catch((error) => {
                            console.error("❌ Webpack re-run failed:", error.message);
                        });
                    }
                });

                angularWatch.stderr.on("data", (data) => {
                    const output = data.toString();

                    // Only show actual errors, not normal CLI progress output
                    if (output.includes("Error:") && !output.includes("Warning:")) {
                        console.error(`🅰️ Error: ${output.trim()}`);
                    } else if (output.includes("Warning:")) {
                        console.warn(`🅰️ Warning: ${output.trim()}`);
                    }
                });

                angularWatch.on("close", (code) => {
                    if (code !== 0) {
                        console.error(`❌ Angular watch process exited with code ${code}`);
                    }
                });

                // Keep the process running
                process.on("SIGINT", () => {
                    if (webpackWatcher) {
                        webpackWatcher.close();
                    }
                    angularWatch.kill();
                    process.exit(0);
                });

                // Return a promise that never resolves to keep watch mode running
                return new Promise(() => {});
            } else {
                // Run Angular build first and WAIT for it to truly complete
                const angularResult = await runAngularBuildSync(targetSpec, context);

                // Then run webpack compilation into the Angular output
                await runWebpack(webpackConfig);

                // Return success
                resolve({ success: true });
            }
        } catch (error) {
            console.error("❌ Extension builder failed:", error.message);
            reject({ success: false, error: error.message });
        }
    });
});

module.exports.schema = builderOptionsSchema;
