const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const CleanWebpackPlugin = require('webpack-clean-plugin');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const commonPaths = require('./paths');
const cleanOptions = {
    root: commonPaths.root,
}

module.exports = env =>  {
  return  {
    mode: 'production',
    entry: commonPaths.entryPath,
    output: {
    path: path.resolve(__dirname,commonPaths.jsPath+"/"+env),
      filename: '[name].js',
      chunkFilename: '[name].js',
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|jsx)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            emitWarning: true,
          },
        },
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /(node_modules)/,
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
      new ParallelUglifyPlugin({
        uglifyJS: {
            compress: {
                dead_code: true,
                global_defs: {
                    CURRENT_BANDWIDTH: env || '',
                }
            }
        }
      }),
      new CleanWebpackPlugin(commonPaths.jsFolder+"/"+env, cleanOptions),
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: commonPaths.templatePath,
      }),
      new webpack.DefinePlugin({
        "CURRENT_BANDWIDTH" : JSON.stringify(env),
      }),
      new CopyWebpackPlugin([{ from: 'assets', to: 'assets' }]),
      new Dotenv({
        path: './.env.dev', // load this now instead of the ones in '.env'
        safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
        systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
        silent: true, // hide any errors
        defaults: false, // load '.env.defaults' as the default values if empty.
      }),
    ],
    optimization: {
        runtimeChunk: false,
        minimize : true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'initial',
                    filename : 'vendor.bundle.js'
                },
            },
        },
        minimizer: [
            new UglifyJsPlugin({
                include : /\.(js)/g,
                minify(file, sourceMap) {
                    // https://github.com/mishoo/UglifyJS2#minify-options
                    const uglifyJsOptions = {
                        compress: {
                            dead_code: true,
                            global_defs: {
                                CURRENT_BANDWIDTH: env
                            }
                        }
                    };
                    if (sourceMap) {
                      uglifyJsOptions.sourceMap = {
                        content: sourceMap,
                      };
                    }
                    return require('uglify-js').minify(file, uglifyJsOptions);
                },
            }),
        ]
    },
  };
}