const withTM = require('next-transpile-modules')
module.exports = withTM({
  target: 'serverless',
  transpileModules: ['@zeit-now-monorepo', '/packages'],
})
