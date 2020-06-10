const path = require('path'),
  webpack = require('webpack'),
  HtmlWebPackPugin = require('html-webpack-plugin'),
  HtmlBeautifyPlugin = require('html-beautify-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  WebpackNotifierPlugin = require('webpack-notifier'),
  TerserPlugin = require('terser-webpack-plugin')

const utils = require('./utils')

module.exports = (env, argv) => {
  return {
    context: path.resolve(__dirname, './src'),
    entry: {
      app: './app.js'
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'assets/js/[name].[hash:7].bundle.js',
      chunkFilename: 'assets/js/[name].[hash:7].bundle.js'
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /(node_modules|vendors).+(?<!css)$/,
            chunks: 'initial',
            name: 'vendor',
            enforce: true
          },
        }
      }
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: { presets: ['es2015'] }
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        },
        {
          test: /\.pug$/,
          use: [
            {
              loader: 'pug-loader'
            }
          ]
        },
        {
          test: /\.(css|scss)$/,
          use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            argv.mode !== 'production' ? 'css-loader?sourceMap' : 'css-loader?minimize&sourceMap',
            'postcss-loader?sourceMap',
            'resolve-url-loader',
            'sass-loader?outputStyle=compressed&sourceMap'
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            name: 'assets/images/[name].[ext]'
          }
        },
        {
          test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader',
          options: {
            name: 'assets/fonts/[name].[ext]',
          }
        },
        {
          test: /\.(mp4)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            name: 'assets/videos/[name].[ext]'
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist/**/*.*']),
      new CopyWebpackPlugin([
        { from: 'assets/images', to: 'assets/images/' },
        { from: 'assets/fonts', to: 'assets/fonts/' },
        { from: 'assets/storage', to: 'assets/storage/' }
      ]),
      new MiniCssExtractPlugin({
        filename: 'assets/css/[name].[hash:7].bundle.css',
        // chunkFilename: 'assets/css/[name].[hash:7].bundle.css'
      }),

      ...utils.pages(),

      new HtmlWebPackPugin({
        filename: 'index.html',
        template: 'views/pages/index.pug',
        inject: true,
        hash: true,
        minify: {
          html5: true,
          removeComments: true,
          collapseWhitespace: false
        }
      }),

      new HtmlBeautifyPlugin({
        config: {
          html: {
            end_with_newline: true,
            indent_size: 2,
            indent_with_tabs: true,
            indent_inner_html: true,
            preserve_newlines: false,
            unformatted: ['p', 'i', 'b', 'span']
          }
        },
        replace: [' type="text/javascript"']
      }),

      new WebpackNotifierPlugin({
        title: 'Don Santiago',
        alwaysNotify: true
      })

      // new WebpackNotifierPlugin({
      //   title: 'Intranet La Agencia'
      // })
    ]

  }

}
