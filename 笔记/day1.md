##1：npm 创建 vue 文件
node webpack
结构
node_modules 依赖文件夹
public 静态资源文件夹，webpack 打包时候文件源目录打包进入 dist 文件夹
src 源代码文件
assets：放静态资源，多组件公用，当成一个模块，打包 js 文件中去
components: 一般组件
babel.config.js:配置文件 es6 转 es5
package.json:项目的说明书 项目信息 依赖 如何运行
package-lock.json:缓存行文件 二次打开会更快
README.md：说明性文件

##2：项目的配置
2.1 运行自动打开
package.json
"scripts": {
加入--open 可以自动打开
"serve": "vue-cli-service serve --open",
"build": "vue-cli-service build",
"lint": "vue-cli-service lint"
},

2.2 语法检查关闭 eslint
module.exports = defineConfig({
transpileDependencies: true,
// 关闭语法校验
lintOnSave: false,
});

2.3 src 文件夹简写配置
在 jsconfig.json 配置别名@代替 src
其实这个好像已经配置了

##3：分析路由关系
1 先打开首页分析共同点 设置为一般组件
2 找到二级路由
3 再以此下发

##4：优先布局中的非路由组件
工作步骤
1 静态页面组件
2 拆分组件
3 获取动态数据
4 完成逻辑交互

清除默认样式
引入自己样式

##5 搭建 vuerouter
pages 放置路由组件
5.1 项目中配置的路由都放置在 router 文件中去
5.2 路由组件和非路由组件的区别
1 文件位置
2 路由组件不是</>渲染的 在路由出口中显示
3 路由组件多
$route 可以获取该条路由的信息 路径 query params 转成props 等等
$router 一般进行编程式路由导航使用，还有 push 和 replace 和进退操作等等

##6 路由组件元信息
一般组件在结构中可能会因为你需要
改变其显示情况
6.1 使用路由信息去判断 组件 v-show 的情况
6.2 当然其实这里的路由信息可以在路由元信息中判断
6.3 路由的信息是配置项，所以他的 key 都是确定的，能够自由添加的都在 meta 中

##8 路由传参
1 跳转两种方式
2 传参写法 两种
params 参数：属于路径中的一部分，需要注意配置路由需要占位
query 参数：不属于路径中的一部分，不需要占位

