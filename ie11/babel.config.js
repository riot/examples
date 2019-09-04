module.exports = {
  'presets': [
    [
      '@babel/preset-env',
      {
        modules: false,
        'targets': {
          'ie': '11'
        }
      }
    ]
  ]
}