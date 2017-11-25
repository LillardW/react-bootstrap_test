var webpack = require('webpack');

module.exports = {
    entry: __dirname + '/src/index.js',
        output:{
        path: __dirname + '/build',
        filename:'bundle.js'
    },

    module: {
        //loaders加载器
        loaders: [
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader'//loader的名称（必须）
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'style!css'
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'style!css!less'
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'url?limit=25000'
            }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
};