const { buildUnified } = require('./build-functions');

// Get command line arguments
const isProduction = process.argv.includes('--prod') || process.argv.includes('--production');

// Run the build
buildUnified(isProduction);