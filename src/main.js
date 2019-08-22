// console.log('ok+nnac+1')
import './css/index.css'  //导入非js文件时，webpack交给webpack.config.js中配置的第三方模块加载器处理，如果没有找到相应的处理器，报错。
import './css/index.less'
import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'
import VueRouter from 'vue-router'
import app from './App.vue'
import about from './views/About.vue'

class Person {
    static info = { name: 'js class', age: 30 }
}
console.log(Person.info)

/**
 * vue-cli和vue-loader的区别：
 * 如果你不想手动设置 webpack，我们推荐使用 Vue CLI 直接创建一个项目的脚手架。通过 Vue CLI 创建的项目会针对多数常见的开发需求进行预先配置，做到开箱即用。
 * 如果 Vue CLI 提供的内建没有满足你的需求，或者你乐于从零开始创建你自己的 webpack 配置，那么请继续阅读这篇指南。
 * 参见：https://vue-loader.vuejs.org/zh/guide/#vue-cli
 */
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/about',
            component: about
        },
        {
            path: '/home',
            component: () => import('./views/Home.vue')
        }
    ]
})

new Vue({
    router,  // VueRouter的实例对象得扩展到vue才能使用
    el: '#app',
    // data: function () {
    //     return {
    //         msg: 'hello,Vue'
    //     }
    // },  // 父元素的data属性子组件要想使用，请参见父元素向子组件传值章节。不能直接使用。
    // 在webpack中使用vue,如果想把一个.vue组件放到页面中展示，需要使用render函数。render函数引入的组件，将覆盖原页面的一切内容。
    // 简写形式
    // render: h => h(app)  
    // 完整形式。参数是一个函数
    render: function (createElement) {
        return createElement(app)  // 函数需要一个参数，即我们要引用的组件，这里是app.vue
    }
    /**
     * render函数是什么
     * 简单的说，在vue中我们使用模板HTML语法组建页面的，使用render函数我们可以用js语言来构建DOM
     * 因为vue是虚拟DOM，所以在拿到template模板时也要转译成VNode的函数，而用render函数构建DOM，vue就免去了转译的过程。
     * 当使用render函数描述虚拟DOM时，vue提供一个函数，这个函数是就构建虚拟DOM所需要的工具。官网上给他起了个名字叫createElement。还有约定的简写叫h,
     * vm中有一个方法_c,也是这个函数的别名
     */
})