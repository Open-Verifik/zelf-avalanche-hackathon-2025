const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
    mode: isProduction ? 'production' : 'development',
    entry: './content-scripts/autofill/autofill.ts',
    output: {
      path: path.resolve(__dirname, 'dist/dev/ext/chrome'),
      filename: 'autofill.js',
      clean: false
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'content-scripts/tsconfig.content-scripts.json')
            }
          },
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'content-scripts')
      }
    },
    optimization: {
      minimize: isProduction
    },
    target: 'web',
    devtool: isProduction ? false : 'cheap-module-source-map',
    watch: process.env.WATCH === 'true',
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000
    }
  };
};
