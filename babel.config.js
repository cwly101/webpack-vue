module.exports = function (api) {
    api.cache(true);
  
    const presets = [ "@babel/preset-env" ];
    const plugins = [ "@babel/plugin-transform-runtime","@babel/plugin-proposal-class-properties" ];
  
    return {
      presets,
      plugins
    };

    /**
     * 关于bable两种方式配置文件的说明
     * 方式1： babel.webconfg.js
     * 使用场景：你是否希望以编程的方式创建配置文件？你是否希望编译 node_modules 目录下的模块？ 使用方式1
     * 方式2： .bablerc
     * 使用场景：你是否只是需要一个简单的并且只用于单个软件包的配置？使用方式2
     * 官方推荐使用 babel.config.js 格式的配置文件。 官网：https://www.babeljs.cn/docs/configuration#babelconfigjs
     * 
     * 
     * 需要安装的模块及加载器如下：
     * 开发环境依赖： --save-dev
     * @babel/core 、@babel/plugin-proposal-class-properties 、@babel/plugin-transform-runtime 、@babel/preset-env(语法对应关系模块)
     * babel-loader
     * 生产环境依赖： --save
     * @babel/runtime
     */
  }