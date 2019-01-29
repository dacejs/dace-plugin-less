/**
 * dace.config.js 未使用 babel 编译
 * 保险起见，请使用 es5 语法书写
 */

module.exports = {
  plugins: ['less'],

  modify(config, { target }) {
    const appConfig = config;
    if (target === 'web') {
      // css 输出时不带 hash
      const miniCssExtractPlugin = appConfig.plugins.find(p => p.constructor.name === 'MiniCssExtractPlugin');
      miniCssExtractPlugin.options.filename = 'css/[name].css';
      miniCssExtractPlugin.options.chunkFilename = 'css/[name].css';
    }

    return appConfig;
  }
};
