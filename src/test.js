// ES2015(ES6)中向外暴露对象的方式。 要引用对外暴露的对象，使用： import 随意起的名称 from '对象所在文件'  详见main.js中对于模块对象的引用
export default {
    Person: {
        name: 'monic', 
        age: 5
    }
}

export class User {
    static stuNo = 'no.33'
}

export let ProductList = {
    products:[
        {
            name: 'apple',
            price: 3.5
        },
        {
            name: 'banana',
            price: 3.0
        }
    ]
}

// 向外暴露对象有两种方式：
// 1. export defalut
// 2. export
// 对于引用方来说，方式1暴露的对象，必然会接收。 方式2暴露的对象为可选，可以选择性接收。