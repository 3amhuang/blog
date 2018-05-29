const merge = require('webpack-merge')
const base = require('./webpack.base.conf.js')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public'
  }
})
