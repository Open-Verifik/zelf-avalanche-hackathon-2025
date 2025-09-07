const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    background: './background-scripts/background.ts',
    autofill: './content-scripts/autofill/autofill.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist/extension-scripts'),
    filename: '[name].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@background': path.resolve(__dirname, 'background-scripts'),
      '@content': path.resolve(__dirname, 'content-scripts'),
      '@shared': path.resolve(__dirname, 'shared')
    }
  },
  optimization: {
    minimize: false // Keep readable for debugging
  },
  target: 'webworker',
  devtool: 'source-map'
};
