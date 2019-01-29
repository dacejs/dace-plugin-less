# dace-plugin-less

该插件让 less 和 dace 能一起工作。

## 安装
```
npm i dace-plugin-less
```

## 用法

在 `dace.config.js` 的插件中添加配置：

```js
module.exports = {
  plugins: ['less']
};
```

还可以传入参数：

```js
module.exports = {
  plugins: [
    ['less', {
      strictMath: true,
      noIeCompat: true
    }]
  ]
};
```
