module.exports = {
  'presets': [
    '@babel/typescript',
    [
      '@babel/preset-env',
      {
        'modules': false,
        'targets': [
          'last 2 versions'
        ]
      }
    ]
  ]
}
