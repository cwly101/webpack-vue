const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    mode: 'development', // 设置mode
    module: { //用于配置第三方模块加载器
        rules: [ //第三方模块匹配规则
            {
                test: /\.css$/,  // 正则表达式匹配规则。此处的test，就相当于js中的test.
                use: ['style-loader', 'css-loader']  //存在多个加载器时，调用顺序为从后向前，最终交给webpack处理。
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|gif|jpg|jpeg|bmp)$/,   //处理图片文件的加载器类
                use: 'url-loader?limit=2048&name=[hash:8]-[name].[ext]'  //加载器传参与url地址传参一样。
                // url-loader默认采用base64压缩图片，无论图片多大。但通常大图片不适合用base64压缩。
                // 参数解释：
                // limit表示图片小于这个值才适用base64压缩。
                // name表示图片的命名规则，默认以一个32位的hash值命名图片，防止重复。[name].[ext]表示图片以原来名字命名。[hash:8]表示取hash值的前8位。
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,  //处理字体文件的加载器类
                use: 'url-loader'
            },
            {
                test: /\.js$/,   // ES2015(ES6)语法识别加载器类
                exclude: /node_modules/,   // 一定要排除编译这个文件夹下的js文件，这是模块安装文件夹。
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {  // 为以vue结尾import的文件设置一个别名，指向指定路径的文件
            'vue$': 'vue/dist/vue.js'
        }
    },
    plugins: [
        // 请确保引入这个插件！它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
        new VueLoaderPlugin()
    ]
}