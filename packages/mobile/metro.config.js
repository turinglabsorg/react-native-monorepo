const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

// CHANGE | Add the shared package to the watchFolders and the root node_modules
const config = {
    watchFolders: [
        path.resolve(__dirname, '../../node_modules'),
        path.resolve(__dirname, '../../node_modules/@react-native-monorepo/shared')
    ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
