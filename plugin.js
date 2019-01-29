/**
 * 在 css rules 后追加 less-loader 即可
 */
module.exports = {
  modify(config, { target, isDev }, webpackInstance, options) {
    const appConfig = config;

    const cssRules = appConfig.module.rules.find(rule => rule.test && rule.test.toString() === '/\\.css$/');
    if (cssRules) {
      appConfig.module.rules.unshift({
        test: /\.less$/,
        use: [...cssRules.use, {
          loader: require.resolve('less-loader'),
          options
        }]
      });
    } else {
      console.log('Not found CSS rules in webpack config. `dace-plugin-less` failed.');
    }

    return appConfig;
  }
};
