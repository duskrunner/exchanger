const webpackMerge = require('webpack-merge');

const applyPresets = env => {
  const { presets } = env;
  if (presets) {
    const mergedPresets = [].concat(...[presets]);
    const mergedConfigs = mergedPresets.map(presetName => {
      return require(`./presets/webpack.${presetName}`)(env);
    });

    return webpackMerge({}, ...mergedConfigs);
  }
  return {};
};

module.exports = applyPresets;
