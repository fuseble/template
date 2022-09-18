const presets = ['module:metro-react-native-babel-preset'];
const plugins = [];

plugins.push([
  'module-resolver',
  {
    root: ['./'],
    extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@api': './src/api',
      '@assets': './src/assets',
      '@components': './src/components',
      '@hooks': './src/hooks',
      '@i18n': './src/i18n',
      '@routes': './src/routes',
      '@scenes': './src/scenes',
      '@theme': './src/theme',
      '@utils': './src/utils',
      '@env': './src/env.ts',
    },
  },
]);

// plugins.push(['module:react-native-dotenv']);

module.exports = {
  presets,
  plugins,
};
