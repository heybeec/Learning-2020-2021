const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: "./src/index.js", 
    output: {
        filename: "js/site-[contenthash].js",
        path: path.resolve(__dirname, 'dist')
    }, 
    module: {
        rules: [
            
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                use: [
                    {
                        loader: 'url-loader', 
                        options: {
                            limit: 51200,
                            name: '[name]-[contenthash].[ext]',
                            outputPath: 'images'
                        } 
                    }
                ]
            }, //end images rule
            {
                test: /\.(woff(2)?|ttf|eot|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]-[contenthash].[ext]',
                            outputPath: 'fonts'
                        }
                    }
                ]
            }, //end fonts rule
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            }
        ]//end rules array
    },//end module
    plugins: [
        new cleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: 'src/templates/index.html'
        })
    ]
}//end module.exports