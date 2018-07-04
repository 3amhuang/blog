const merge = require('webpack-merge')
const base = require('./webpack.base.conf.js')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: false,
    compress: true,
    host: HOST || 'localhost',
    port: PORT || '8080',
    proxy: {
      '*': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: true
    }),
    new CopyWebpackPlugin([{
        from: path.resolve(__dirname, '../app/assets'),
        to: 'assets',
        ignore: ['.*']
      }
    ])
  ]
})
