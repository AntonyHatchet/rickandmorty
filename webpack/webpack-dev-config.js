// webpack-dev-config.js

// configuration data related to development only

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const paths = require('./paths');
// import common webpack config
const common = require('./webpack-common-config.js');

module.exports = merge(common, {
  entry: [paths.appIndexTs],
  mode: 'development',
  // devtool option controls if and how source maps are generated.
  // see https://webpack.js.org/configuration/devtool/
  // If you find that you need more control of source map generation,
  // see https://webpack.js.org/plugins/source-map-dev-tool-plugin/
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  module: {
    rules: [{
        // look for .js or .jsx files
        test: /\.(js|jsx|ts|tsx)$/,
        // in the `src` directory
        include: path.resolve(paths.appSrc),
        exclude: /(node_modules)/,
        use: {
          // use babel for transpiling JavaScript files
          loader: 'awesome-typescript-loader',
        },
      },
      {
        // look for .css or .scss files
        test: /\.(css|scss)$/,
        // in the `src` directory
        include: [path.resolve(paths.appSrc)],
        use: [{
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          },
          // Add additional loaders here. (e.g. sass-loader)
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }
    ],
  },
});