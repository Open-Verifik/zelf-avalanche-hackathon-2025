const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Watch script for unified extension build
function watchUnifiedBuild() {
  const watchDirs = [
    'background-scripts',
    'content-scripts',
    'shared',
    'configurations'
  ];
  
  let totalDirs = 0;

  watchDirs.forEach(dir => {
    if (!fs.existsSync(dir)) return;

    totalDirs++;
  });
  
  let isBuilding = false;
  
  const buildUnified = () => {
    if (isBuilding) return;

    isBuilding = true;
    
    try {
      execSync('node scripts/build-unified.js', { stdio: 'inherit' });
    } catch (error) {
      console.error('Build failed:', error.message);
    } finally {
      isBuilding = false;
    }
  };
  
  // Initial build
  buildUnified();
  
  // Watch each directory
  watchDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      const watcher = fs.watch(dir, { recursive: true }, (eventType, filename) => {
        if (filename && (filename.endsWith('.ts') || filename.endsWith('.json'))) {
          buildUnified();
        }
      });
      
      // Keep reference to prevent garbage collection
      process.on('exit', () => watcher.close());
    }
  });
}

watchUnifiedBuild();
