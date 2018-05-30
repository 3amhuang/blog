const merge = require('webpack-merge')
const base = require('./webpack.base.conf.js')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    host: HOST || '192.168.133.128',
    port: PORT || '8081'
  }
})
