<template>
  <div>
    <h5>我是一个Component,名字:App</h5>
    <h4 style="color:red">注：命令【cnpm i】的使用， 当一个webpack项目中缺少node_moudules文件夹，但有package.json文件时，执行此命令，会自动下载package.json文件所包含的第三方模块包。</h4>
    <h3>Webpack study Demo</h3>
    <p>
      说明：weback-dev-server 作为服务器运行时，打包好的js文件（如：main.bundle.js），会一式两份，dist目录下一份，内存中一份。在服务器运行过程中，对文件作出的任何更新，
      内存中那份都会同步更新，但dist目录下那份只有在命令行中执行webapck时，才重新生成。如果网站的html文件中引用的文件是dist目录下那份，刷新也看不到效果。内存中那份，存在于项目根路径下，
      结构目录下不可见，但可以访问。
      html中引用地址：/main.bundle.js。 服务器url访问地址：http://localhost:8080/main.bundel.js。
      打包好的js文件名称，取决于webpack.config.js文件中output.filename属性定义的名子。
    </p>
    <p>可修改main.js中日志输出内容，浏览器同步更新。用于验证内存中份是否生效。</p>
    <p>
      --hot 表示热更新，其实字面意思不完全。就算没有--hot配置，对js作出修改后，内存中那份也会整个重新编译。--hot表示只编译修改的那部分，以打个补丁的方式，生成一个很小js文件。
      这样可以减小编译的内容。
    </p>
    <h3>构建webpack项目的步骤</h3>
    <p>1. 新建项目目录文件夹，用vs code打开</p>
    <p>2. 打开vs code的终端（Terminal），执行： npm init -y （y表示所有询问选项一路yes)</p>
    <p>3. 在项目根目录下，新建文件夹，src和dist,在src中新建 main.js文件，在src中新建一个测试用的index.html。（生成默认的html标签快捷方式，按键！，选中回车）</p>
    <p>4. 根目录下，新建 webpack.config.js 文件，配置webpack打包时的各种选项。见webpack.config.js文件内容</p>
    <p>5. 在测试html文件引入打包好的js文件（内存中那份）</p>
    <p>
      6. 终端下运行打包命令：webpack
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明：webpack会自动读取webpack.config.js文件中的配置信息
    </p>
    <p>
      7. 终端安装：cnpm install webpack-dev-server --save-dev
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>注：就算全局已经安装webapck,webpack-dev-server也要求在项目本地安装webpack</span>
    </p>
    <p>
      8. 在package.json中配置webpack-dev-server选项，在scripts在选项下，加入： "dev": "webpack-dev-server --open --port 5001
      --content-base src --hot",
    </p>
    <p>9. 终端命令：npm run dev （启动服务器）</p>
    <h3>url-loader的使用</h3>
    <p>webpack解析url,需要第三方的 url-loader模块，该模块又依赖 file-loader模块。请先安装。如样式背景：background: url('../img/3.png');</p>
    <div class="bg"></div>
    <p></p>
    <div class="svg_div"></div>
    <h5>JSON文件中不能写注释，即以.json后缀名结尾的文件，如：package.json 等文件，否则编译报错。</h5>
    <h3>webpack中使用vue</h3>
    <span>vue data数据中的msg属性值：{{ msg }}</span>
    <h4>非vue-cli创建方式，注意二者区别</h4>
    <p>1. cnpm i vue vue-loader vue-template-compiler -D</p>
    <p>2. 配置webpack.config.js，详见该文件内注释。</p>
    <p>3. main.js中引入vue</p>
    <p>4. main.js中实例化vue,并且render函数引入.vue组件。说明：组件内还可嵌套子组件，render中通常引入全局总组件，如:App.vue</p>
    <h3>ES2015中 export defalut 和 import ... from ... 使用</h3>
    <p>name: {{ person.name }} , age: {{ person.age }}</p>
    <p>StuNo: {{ stu.stuNo }}</p>
    <ul>
      <li v-for="item in list" :key="item.name">{{ item.name }} --- {{ item.price }}</li>
    </ul>
    <h3>webpack 中使用 vue-router</h3>
    <p>
      <router-link to="/about">About</router-link> | <router-link to="/home">Home</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>
<script>
// 大括号中的为可选接收数据项，不写某项即不会接收该项数据。可选数据以大括号的方式接收。User as u,u就是给User新起的别名
import test, { User, ProductList } from "./test.js";

// ES2015(ES6)中向外暴露对象的方式。 要引用对外暴露的对象，使用： import 随意起的名称 from '对象所在文件'  详见main.js中对于模块对象的引用
export default {
  name: "app",
  data: function() {
    return {
      msg: "webpack import vue,use vue-loader",
      person: test.Person,
      stu: User,
      list: ProductList.products
    };
  }
};
</script>