const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const config = {
  resolver: {
    assetExts: ['png', 'jpg', 'jpeg', 'gif', 'svg'],
    extraNodeModules: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  watchFolders: [path.resolve(__dirname, 'src')],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
