module.exports = {
  plugins: [
    require('babel-plugin-transform-async-to-generator'),
    require('babel-plugin-transform-es2015-modules-commonjs'),
    require('babel-plugin-transform-function-bind')
  ]
}
