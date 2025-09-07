const fs = require('fs');
const path = require('path');
const { buildUnified, bundleExtensionScripts } = require('./build-functions');

// Watch script for unified extension build with intelligent file detection
function watchUnifiedBuild() {
  const watchDirs = [
    'background-scripts',
    'content-scripts',
    'shared',
    'configurations',
    'src' // Angular source files
  ];
  
  // Directories to exclude from watching
  const excludeDirs = [
    'dist',
    'node_modules',
    '.git',
    '.angular',
    'coverage'
  ];
  
  let isBuilding = false;
  let buildTimeout = null;
  let lastBuildTime = 0;
  
  // Debounced build function to prevent multiple builds
  const buildUnifiedDebounced = (reason = 'file change') => {
    if (isBuilding) {
      console.log('⏳ Build already in progress, skipping...');
      return;
    }

    // Prevent builds from triggering too frequently (within 2 seconds)
    const now = Date.now();
    if (now - lastBuildTime < 2000) {
      console.log('⏳ Build too recent, skipping...');
      return;
    }

    // Clear any pending build
    if (buildTimeout) {
      clearTimeout(buildTimeout);
    }

    // Debounce builds by 1000ms to handle multiple rapid file changes
    buildTimeout = setTimeout(() => {
      isBuilding = true;
      lastBuildTime = Date.now();
      console.log(`\n🔄 Rebuilding due to: ${reason}`);
      console.log('=' .repeat(50));
      
      try {
        buildUnified(false); // Always use development mode for watch
        console.log('✅ Watch build completed successfully!');
      } catch (error) {
        console.error('❌ Watch build failed:', error.message);
      } finally {
        isBuilding = false;
        console.log('=' .repeat(50));
        console.log('👀 Watching for changes...\n');
      }
    }, 1000);
  };
  
  // Initial build
  console.log('🚀 Starting initial build...');
  buildUnifiedDebounced('initial build');
  
  // Watch each directory with intelligent file filtering
  const watchers = [];
  
  watchDirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      console.log(`⚠️  Directory not found: ${dir}`);
      return;
    }

    console.log(`👀 Watching directory: ${dir}`);
    
    const watcher = fs.watch(dir, { recursive: true }, (eventType, filename) => {
      if (!filename) return;
      
      const filePath = path.join(dir, filename);
      
      // Check if file is in an excluded directory
      const isInExcludedDir = excludeDirs.some(excludeDir => 
        filePath.includes(excludeDir) || filePath.includes(excludeDir.replace('/', '\\'))
      );
      
      if (isInExcludedDir) {
        return; // Skip files in excluded directories
      }
      
      // Skip files that are being written by the build process
      if (filePath.includes('extension-scripts') || 
          filePath.includes('out-tsc') ||
          filePath.includes('background-scripts') && filePath.includes('dist/')) {
        return;
      }
      
      // Only rebuild for relevant file changes
      const shouldRebuild = (
        filename.endsWith('.ts') ||
        filename.endsWith('.json') ||
        filename.endsWith('.html') ||
        filename.endsWith('.css') || filename.endsWith('.scss') ||
        filename.match(/\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/i)
      );
      
      const shouldSkip = (
        filename.endsWith('.map') ||
        filename.endsWith('.tmp') ||
        filename.startsWith('.')
      );
      
      if (shouldRebuild && !shouldSkip) {
        const isSourceFile = (
          filePath.includes('/background-scripts/') && filename.endsWith('.ts') ||
          filePath.includes('/content-scripts/') && filename.endsWith('.ts') ||
          filePath.includes('/shared/') && filename.endsWith('.ts') ||
          filePath.includes('/src/') && (filename.endsWith('.ts') || filename.endsWith('.html') || filename.endsWith('.scss')) ||
          filePath.includes('/configurations/') && filename.endsWith('.json')
        );
        
        if (isSourceFile) {
          console.log(`📝 File changed: ${filePath}`);
          buildUnifiedDebounced(`change in ${filename}`);
        }
      }
    });
    
    watchers.push(watcher);
  });
  
  // Watch for changes in build configuration files
  const configFiles = [
    'tsconfig.extension.json',
    'angular.json',
    'package.json'
  ];
  
  configFiles.forEach(configFile => {
    if (fs.existsSync(configFile)) {
      console.log(`👀 Watching config file: ${configFile}`);
      const watcher = fs.watch(configFile, (eventType, filename) => {
        if (filename) {
          console.log(`📝 Config changed: ${configFile}`);
          buildUnifiedDebounced(`config change in ${configFile}`);
        }
      });
      watchers.push(watcher);
    }
  });
  
  // Graceful shutdown
  const cleanup = () => {
    console.log('\n🛑 Stopping watch mode...');
    watchers.forEach(watcher => watcher.close());
    if (buildTimeout) {
      clearTimeout(buildTimeout);
    }
    process.exit(0);
  };
  
  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
  process.on('exit', cleanup);
  
  console.log('\n✅ Watch mode started successfully!');
  console.log('📁 Watching directories:', watchDirs.join(', '));
  console.log('🎯 Press Ctrl+C to stop watching\n');
}

// Start watching
watchUnifiedBuild();