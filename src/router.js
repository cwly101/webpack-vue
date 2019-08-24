import VueRouter from 'vue-router'

const router = new VueRouter({
    routes: [
        {
            path: '/about',
            component: () => import('./views/About.vue')
        },
        {
            path: '/home',
            component: () => import('./views/Home.vue'),
            children: [
                {
                    path: 'login',
                    component: () => import('./component/Login.vue')
                },
                {
                    path: 'register',
                    component: () => import('./component/Register.vue')
                }
            ]
        }
    ]
})

export default router
//注：VueRouter抽离成独立js文件，向外暴露对象的方式比较特殊。对比test.js文件中的export default { ... } 同时暴露多个对象的方式相比，这里只暴雷VueRouter一个实例对象。 
//我尝试了以test.js中 export defalut { p:p1 } 的方式向外暴露router对象，如下。运行不认，提示 Error in beforeCreate hook: "TypeError: this._router.init is not a function"。
// export default {
//   router: router
// }

// 与export default router等同，都是暴露一个VueRouter对象的实例。
// export default new VueRouter({
//     routes: [
//         {
//             path: '/about',
//             component: () => import('./views/About.vue')
//         },
//         {
//             path: '/home',
//             component: () => import('./views/Home.vue'),
//             children: [
//                 {
//                     path: 'login',
//                     component: () => import('./component/Login.vue')
//                 },
//                 {
//                     path: 'register',
//                     component: () => import('./component/Register.vue')
//                 }
//             ]
//         }
//     ]
// })