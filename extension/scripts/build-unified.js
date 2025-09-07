const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Unified build script that compiles, bundles, and builds everything in one process
function buildUnified() {
  const isProduction = process.argv.includes('--prod') || process.argv.includes('--production');
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
    
    // Copy background.js to background-scripts folder
    const backgroundSource = path.join(__dirname, '../dist/extension-scripts/background.js');
    const backgroundTarget = path.join(backgroundScriptsDir, 'background.js');
    if (fs.existsSync(backgroundSource)) {
      fs.copyFileSync(backgroundSource, backgroundTarget);
      console.log('✅ Background script copied to background-scripts folder');
    } else {
      console.warn('⚠️  Background script not found at:', backgroundSource);
    }
    
    // Copy autofill.js to background-scripts folder
    const autofillSource = path.join(__dirname, '../dist/extension-scripts/autofill.js');
    const autofillTarget = path.join(backgroundScriptsDir, 'autofill.js');
    if (fs.existsSync(autofillSource)) {
      fs.copyFileSync(autofillSource, autofillTarget);
      console.log('✅ Autofill script copied to background-scripts folder');
    } else {
      console.warn('⚠️  Autofill script not found at:', autofillSource);
    }
    
    // Step 5: Verify final output
    const finalBackgroundPath = path.join(backgroundScriptsDir, 'background.js');
    const finalAutofillPath = path.join(backgroundScriptsDir, 'autofill.js');
    
    if (fs.existsSync(finalBackgroundPath) && fs.existsSync(finalAutofillPath)) {
      // Clean up temporary extension-scripts directory
      const extensionScriptsDir = path.join(__dirname, '../dist/extension-scripts');
      if (fs.existsSync(extensionScriptsDir)) {
        fs.rmSync(extensionScriptsDir, { recursive: true, force: true });
        console.log('✅ Cleaned up temporary extension-scripts directory');
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


// Bundling functions for extension scripts
function bundleExtensionScripts() {
  const outDir = path.join(__dirname, '../dist/out-tsc');
  const bundleDir = path.join(__dirname, '../dist/extension-scripts');
  
  // Create bundle directory
  if (!fs.existsSync(bundleDir)) {
    fs.mkdirSync(bundleDir, { recursive: true });
  }
  
  // Bundle background script
  bundleBackgroundScript(outDir, bundleDir);
  
  // Bundle autofill script
  bundleAutofillScript(outDir, bundleDir);
}

function bundleBackgroundScript(outDir, bundleDir) {
  const backgroundDir = path.join(outDir, 'background-scripts');
  const servicesDir = path.join(backgroundDir, 'services');
  
  // Read all the service files
  const browserApiUtil = fs.readFileSync(path.join(servicesDir, 'browser-api-util.js'), 'utf8');
  const messageHandler = fs.readFileSync(path.join(servicesDir, 'message-handler.js'), 'utf8');
  const extensionLifecycle = fs.readFileSync(path.join(servicesDir, 'extension-lifecycle.js'), 'utf8');
  const mainBackground = fs.readFileSync(path.join(backgroundDir, 'background.js'), 'utf8');
  
  // Remove import statements and combine
  const bundledBackground = [
    '/// <reference types="webextension-polyfill"/>',
    '',
    '// Browser API Utility',
    browserApiUtil.replace(/import.*?from.*?;?\s*/g, '').replace(/export\s+/g, '').replace(/\/\/\/ <reference types="webextension-polyfill"\/>/, ''),
    '',
    '// Message Handler',
    messageHandler.replace(/import.*?from.*?;?\s*/g, '').replace(/export\s+/g, '').replace(/\/\/\/ <reference types="webextension-polyfill"\/>/, ''),
    '',
    '// Extension Lifecycle',
    extensionLifecycle.replace(/import.*?from.*?;?\s*/g, '').replace(/export\s+/g, '').replace(/\/\/\/ <reference types="webextension-polyfill"\/>/, ''),
    '',
    '// Main Background Script',
    mainBackground.replace(/import.*?from.*?;?\s*/g, '').replace(/\/\/\/ <reference types="webextension-polyfill"\/>/, '')
  ].join('\n');
  
  // Write bundled file
  fs.writeFileSync(path.join(bundleDir, 'background.js'), bundledBackground);
}

function bundleAutofillScript(outDir, bundleDir) {
  const autofillDir = path.join(outDir, 'content-scripts/autofill');
  const servicesDir = path.join(autofillDir, 'services');
  
  // Read all the service files
  const communication = fs.readFileSync(path.join(servicesDir, 'communication.js'), 'utf8');
  const formDetector = fs.readFileSync(path.join(servicesDir, 'form-detector.js'), 'utf8');
  const passwordManager = fs.readFileSync(path.join(servicesDir, 'password-manager.js'), 'utf8');
  const autofillEngine = fs.readFileSync(path.join(servicesDir, 'autofill-engine.js'), 'utf8');
  const uiOverlay = fs.readFileSync(path.join(servicesDir, 'ui-overlay.js'), 'utf8');
  const mainAutofill = fs.readFileSync(path.join(autofillDir, 'autofill.js'), 'utf8');
  
  // Remove import statements and combine
  const bundledAutofill = [
    '/// <reference types="webextension-polyfill"/>',
    '',
    '// Communication Service',
    communication.replace(/import.*?from.*?;?\s*/g, '').replace(/export\s+/g, '').replace(/\/\/\/ <reference types="webextension-polyfill"\/>/, ''),
    '',
    '// Form Detector Service',
    formDetector.replace(/import.*?from.*?;?\s*/g, '').replace(/export\s+/g, '').replace(/\/\/\/ <reference types="webextension-polyfill"\/>/, ''),
    '',
    '// Password Manager Service',
    passwordManager.replace(/import.*?from.*?;?\s*/g, '').replace(/export\s+/g, '').replace(/\/\/\/ <reference types="webextension-polyfill"\/>/, ''),
    '',
    '// Autofill Engine Service',
    autofillEngine.replace(/import.*?from.*?;?\s*/g, '').replace(/export\s+/g, '').replace(/\/\/\/ <reference types="webextension-polyfill"\/>/, ''),
    '',
    '// UI Overlay Service',
    uiOverlay.replace(/import.*?from.*?;?\s*/g, '').replace(/export\s+/g, '').replace(/\/\/\/ <reference types="webextension-polyfill"\/>/, ''),
    '',
    '// Main Autofill Script',
    mainAutofill.replace(/import.*?from.*?;?\s*/g, '').replace(/\/\/\/ <reference types="webextension-polyfill"\/>/, '')
  ].join('\n');
  
  // Write bundled file
  fs.writeFileSync(path.join(bundleDir, 'autofill.js'), bundledAutofill);
}

buildUnified();
