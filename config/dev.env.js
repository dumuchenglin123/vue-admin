'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  // BASE_API: '"http://192.168.1.127:3000/manage"'
  BASE_API: '"https://www.easy-mock.com/mock/5ab493044b094370f9829af8/admin"'
})
