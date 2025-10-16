const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');


//Get the Default Metro Configuration
const defaultConfig = getDefaultConfig(__dirname);

const { assetExts, sourceExts } = defaultConfig.resolver;

module.exports = mergeConfig(defaultConfig, {
  transformer: {
    // Add Dynatrace Transformer
    babelTransformerPath: require.resolve('./customTransformer'),
  },

  resolver: {
    // Handle SVG files
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },

  //Add Dynatrace Reporter
  reporter: require('@dynatrace/react-native-plugin/lib/dynatrace-reporter'),
}
);