const path = require("path");

module.exports = (env, argv) => {
    // Default output path - will be overridden by Angular builder
    const outputPath = process.env.WEBPACK_OUTPUT_PATH || path.resolve(__dirname, "dist/extension-scripts");

    return {
        mode: process.env.NODE_ENV || "development",
        entry: {
            background: "./background-scripts/background.ts",
            autofill: "./content-scripts/autofill/autofill.ts",
        },
        output: {
            path: outputPath,
            filename: "[name].js",
            clean: false, // Don't clean when integrated with Angular
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: [".ts", ".js"],
            alias: {
                "@background": path.resolve(__dirname, "background-scripts"),
                "@content": path.resolve(__dirname, "content-scripts"),
                "@shared": path.resolve(__dirname, "shared"),
            },
        },
        optimization: {
            minimize: process.env.NODE_ENV === "production",
            minimizer:
                process.env.NODE_ENV === "production"
                    ? [
                          new (require("terser-webpack-plugin"))({
                              terserOptions: {
                                  compress: {
                                      drop_console: false, // Keep console logs for debugging extensions
                                      drop_debugger: true,
                                      pure_funcs: ["console.debug"], // Remove console.debug calls
                                  },
                                  mangle: {
                                      safari10: true,
                                  },
                                  format: {
                                      comments: false, // Remove comments
                                  },
                              },
                              extractComments: false,
                          }),
                      ]
                    : [],
        },
        target: "webworker",
        devtool: process.env.NODE_ENV === "production" ? "source-map" : "inline-source-map",
    };
};
