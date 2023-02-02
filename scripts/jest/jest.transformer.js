const esbuild = require('esbuild')

const transformScript = code =>
  esbuild.transformSync(code, {
    target: 'es2016',
    format: 'cjs',
    loader: 'ts'
  }).code

module.exports = {
  canInstrument: true,
  process(code, path) {
    return {
      code: transformScript(code)
    }
  }
}
