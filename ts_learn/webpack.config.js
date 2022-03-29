// 引入包
const path = require('path')

const HTMLwebpack = require('html-webpack-plugin')

// 配置信息
module.exports = {
    //入口文件
    entry:'./src/index.ts',

    //输出文件目录
    output:{
        //打包文件目录(__dirname当前文件所在的 目录)
        path:path.resolve(__dirname, 'dist'),
        //打包后文件
        filename:"bundle.js"
    },
    //指定打包依赖
    module:{
        //指定规则
        rules:[
            {
                //指定生效的文件
                test:/\.ts$/, //匹配已ts结尾的文件
                use:[
                    // 配置babel
                    {
                        loader:"babel-loader",  // 指定加载器
                        // 设置babel
                        options:{
                            //设置预定义环境
                            presets:[
                                [
                                    "@babel/perset-env", //指定环境插件
                                    {
                                        // 指定浏览器运行版本
                                        targets:{
                                            "chrome" : "88"
                                        },
                                        // 指定corejs版本
                                        "corejs":"3",
                                        // 指定corejs 方法
                                        "useBuiltIns": "usage"// 按需加载
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ], //使用的依赖
                exclude: /node-modules/ // 排除的文件
                
            }
        ]
    },
    //配置webpack插件
    plugins:[
        // 加入插件
        new HTMLwebpack()
    ],

    //设置引用的模块后缀
    resolve:{
        extensions:['.ts', '.js']
    }
}