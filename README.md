
### 简述
> 编写实用的js-bridge提供平时使用，分两部分内容。一部分以vuepress 撰写文档，一部分为js-bridge实现。

### rollup 插件说明
* rollup-plugin-node-resolve —帮助 Rollup 查找外部模块，然后导入
* rollup-plugin-commonjs —将CommonJS模块转换为 ES2015 供 Rollup 处理
* rollup-plugin-babel — 让我们可以使用es6新特性来编写代码
* rollup-plugin-terser — 压缩js代码，包括es6代码压缩
* rollup-plugin-eslint — js代码检测

### 代码执行
``` javascript
npm run docs:dev //启动本地文档
npm run docs:build //打包文档
npm run lib:dev //启动本地测试js服务
npm run lib:build //打包js-bridge
npm run build //打包文档和js-bridge
```