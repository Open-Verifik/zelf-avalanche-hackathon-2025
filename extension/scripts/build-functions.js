const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Bundling functions for extension scripts
function bundleExtensionScripts() {
  console.log('Running webpack bundling...');
  
  // Run webpack to bundle the extension scripts
  try {
    execSync('npx webpack --config webpack.extension.config.js', { 
      stdio: 'inherit',
      cwd: path.join(__dirname, '..')
    });
    console.log('✅ Webpack bundling completed successfully');
  } catch (error) {
    console.error('❌ Webpack bundling failed:', error.message);
    throw error;
  }
}

function bundleBackgroundScript(outDir, bundleDir) {
  const backgroundDir = path.join(outDir, 'background-scripts');
  
  // Get all JavaScript files in background-scripts directory and subdirectories
  const getAllJsFiles = (dir, fileList = []) => {
    if (!fs.existsSync(dir)) return fileList;
    
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Recursively get files from subdirectories
        getAllJsFiles(filePath, fileList);
      } else if (file.endsWith('.js') && !file.endsWith('.map')) {
        // Get relative path from backgroundDir for ordering
        const relativePath = path.relative(backgroundDir, filePath);
        fileList.push({ path: filePath, relativePath: relativePath });
      }
    });
    return fileList;
  };
  
  const jsFiles = getAllJsFiles(backgroundDir);
  
  // Sort files to ensure proper order (services first, then main background.js)
  jsFiles.sort((a, b) => {
    // Main background.js should come last
    if (a.relativePath === 'background.js') return 1;
    if (b.relativePath === 'background.js') return -1;
    
    // Services should come before main file
    if (a.relativePath.startsWith('services/') && !b.relativePath.startsWith('services/')) return -1;
    if (!a.relativePath.startsWith('services/') && b.relativePath.startsWith('services/')) return 1;
    
    // Alphabetical order within same level
    return a.relativePath.localeCompare(b.relativePath);
  });
  
  console.log('📦 Bundling background script files:');
  jsFiles.forEach(file => console.log(`  - ${file.relativePath}`));
  
  // Read and combine all files
  const bundledParts = ['/// <reference types="webextension-polyfill"/>', ''];
  
  jsFiles.forEach(file => {
    const content = fs.readFileSync(file.path, 'utf8');
    const cleanContent = content
      .replace(/import.*?from.*?;?\s*/g, '')
      .replace(/export\s+/g, '')
      .replace(/\/\/\/ <reference types="webextension-polyfill"\/>/g, '');
    
    bundledParts.push(`// ${file.relativePath}`);
    bundledParts.push(cleanContent);
    bundledParts.push('');
  });
  
  const bundledBackground = bundledParts.join('\n');
  
  // Write bundled file
  fs.writeFileSync(path.join(bundleDir, 'background.js'), bundledBackground);
  console.log(`✅ Background script bundled (${jsFiles.length} files)`);
}

function bundleAutofillScript(outDir, bundleDir) {
  const autofillDir = path.join(outDir, 'content-scripts/autofill');
  
  // Get all JavaScript files in autofill directory and subdirectories
  const getAllJsFiles = (dir, fileList = []) => {
    if (!fs.existsSync(dir)) return fileList;
    
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Recursively get files from subdirectories
        getAllJsFiles(filePath, fileList);
      } else if (file.endsWith('.js') && !file.endsWith('.map')) {
        // Get relative path from autofillDir for ordering
        const relativePath = path.relative(autofillDir, filePath);
        fileList.push({ path: filePath, relativePath: relativePath });
      }
    });
    return fileList;
  };
  
  const jsFiles = getAllJsFiles(autofillDir);
  
  // Sort files to ensure proper order (services first, then main autofill.js)
  jsFiles.sort((a, b) => {
    // Main autofill.js should come last
    if (a.relativePath === 'autofill.js') return 1;
    if (b.relativePath === 'autofill.js') return -1;
    
    // Services should come before main file
    if (a.relativePath.startsWith('services/') && !b.relativePath.startsWith('services/')) return -1;
    if (!a.relativePath.startsWith('services/') && b.relativePath.startsWith('services/')) return 1;
    
    // Alphabetical order within same level
    return a.relativePath.localeCompare(b.relativePath);
  });
  
  console.log('📦 Bundling autofill script files:');
  jsFiles.forEach(file => console.log(`  - ${file.relativePath}`));
  
  // Read and combine all files
  const bundledParts = ['/// <reference types="webextension-polyfill"/>', ''];
  
  jsFiles.forEach(file => {
    const content = fs.readFileSync(file.path, 'utf8');
    const cleanContent = content
      .replace(/import.*?from.*?;?\s*/g, '')
      .replace(/export\s+/g, '')
      .replace(/\/\/\/ <reference types="webextension-polyfill"\/>/g, '');
    
    bundledParts.push(`// ${file.relativePath}`);
    bundledParts.push(cleanContent);
    bundledParts.push('');
  });
  
  const bundledAutofill = bundledParts.join('\n');
  
  // Write bundled file
  fs.writeFileSync(path.join(bundleDir, 'autofill.js'), bundledAutofill);
  console.log(`✅ Autofill script bundled (${jsFiles.length} files)`);
}

// Main build function
function buildUnified(isProduction = false) {
  const config = isProduction ? 'ext_prod_chrome' : 'ext_dev_chrome';
  
  console.log(`Building unified extension (${isProduction ? 'production' : 'development'})...`);

  try {
    // Step 1: Compile TypeScript extension scripts
    console.log('Step 1: Compiling TypeScript extension scripts...');
    execSync('npx tsc --project tsconfig.extension.json', { stdio: 'inherit' });
    console.log('✅ Extension scripts compiled successfully');
    
    // Step 2: Bundle extension scripts
    console.log('Step 2: Bundling extension scripts...');
    bundleExtensionScripts();
    console.log('✅ Extension scripts bundled successfully');
    
    // Step 3: Run Angular build
    console.log(`Step 3: Running Angular build with configuration: ${config}`);
    execSync(`ng build --configuration ${config}`, { stdio: 'inherit' });
    console.log('✅ Angular build completed successfully');
    
    // Step 4: Copy extension scripts to Angular output
    console.log('Step 4: Copying extension scripts to Angular output...');
    const outputDir = isProduction ? 'dist/prod' : 'dist/dev';
    const backgroundScriptsDir = path.join(__dirname, '..', outputDir, 'background-scripts');
    
    // Create background-scripts directory
    if (!fs.existsSync(backgroundScriptsDir)) {
      fs.mkdirSync(backgroundScriptsDir, { recursive: true });
    }
    
    // Copy bundled background script from extension-scripts
    const backgroundSource = path.join(__dirname, '../dist/extension-scripts/background.js');
    const backgroundTarget = path.join(backgroundScriptsDir, 'background.js');
    
    if (fs.existsSync(backgroundSource)) {
      fs.copyFileSync(backgroundSource, backgroundTarget);
      console.log('✅ Background script copied to background-scripts folder');
    } else {
      console.warn('⚠️  Background script not found at:', backgroundSource);
    }
    
    // Copy bundled autofill script from extension-scripts
    const autofillSource = path.join(__dirname, '../dist/extension-scripts/autofill.js');
    const autofillTarget = path.join(backgroundScriptsDir, 'autofill.js');
    if (fs.existsSync(autofillSource)) {
      fs.copyFileSync(autofillSource, autofillTarget);
      console.log('✅ Autofill script copied to background-scripts folder');
    } else {
      console.warn('⚠️  Autofill script not found at:', autofillSource);
    }
    
    // Copy service files that background script depends on
    const servicesSourceDir = path.join(__dirname, '../dist/out-tsc/background-scripts/services');
    const servicesTargetDir = path.join(backgroundScriptsDir, 'services');
    
    if (fs.existsSync(servicesSourceDir)) {
      // Create services directory
      if (!fs.existsSync(servicesTargetDir)) {
        fs.mkdirSync(servicesTargetDir, { recursive: true });
      }
      
      // Copy all service files
      const serviceFiles = fs.readdirSync(servicesSourceDir);
      serviceFiles.forEach(file => {
        if (file.endsWith('.js')) {
          const sourceFile = path.join(servicesSourceDir, file);
          const targetFile = path.join(servicesTargetDir, file);
          fs.copyFileSync(sourceFile, targetFile);
        }
      });
      console.log('✅ Service files copied to background-scripts/services folder');
    } else {
      console.warn('⚠️  Services directory not found at:', servicesSourceDir);
    }
    
    // Step 5: Verify final output
    const finalBackgroundPath = path.join(backgroundScriptsDir, 'background.js');
    const finalAutofillPath = path.join(backgroundScriptsDir, 'autofill.js');
    
    if (fs.existsSync(finalBackgroundPath) && fs.existsSync(finalAutofillPath)) {
      // Clean up temporary extension-scripts directory
      const extensionScriptsDir = path.join(__dirname, '../dist/extension-scripts');
      if (fs.existsSync(extensionScriptsDir)) {
        fs.rmSync(extensionScriptsDir, { recursive: true, force: true });
      }
      
      console.log('✅ Unified build completed successfully!');
      console.log(`📁 Output directory: ${outputDir}`);
      console.log('📄 Files included:');
      console.log('  - background-scripts/background.js');
      console.log('  - background-scripts/autofill.js');
      console.log('  - All Angular app files');
      console.log('  - Manifest and assets');
    } else {
      console.warn('⚠️  Warning: Extension scripts may not be included in final output');
    }
    
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

module.exports = {
  buildUnified,
  bundleExtensionScripts,
  bundleBackgroundScript,
  bundleAutofillScript
};
