const merge = require('webpack-merge')
const base = require('./webpack.base.conf.js')

module.exports = merge(base, {
  mode: 'production'
})
