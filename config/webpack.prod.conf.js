const merge = require('webpack-merge')
const base = require('./webpack.base.conf.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(base, {
  mode: 'production',
  plugins: [
    new UglifyJSPlugin(),
  ]
})
