const merge = require('webpack-merge')
const common = require('./webpack.common')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
    mode: "production", 
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader
                    }
                    , 'css-loader', {
                    loader: 'postcss-loader', 
                    options: {
                        ident: 'postcss',
                        plugins: [
                            require('autoprefixer')()
                        ]
                    }
                }, 'sass-loader']
            }//end css|scss rule
        ]
    }, 
    plugins: [
        new miniCssExtractPlugin({
            filename: 'css/[name]-[contenthash].css'
        })
    ]
})