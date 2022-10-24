module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.js', '.json'],
        alias: {
          '@ctx': './src/contexts',
          '@components': './src/core/components',
          '@hooks': './src/core/hooks',
          '@utils': './src/utils',
        },
      },
    ],
  ],
}
