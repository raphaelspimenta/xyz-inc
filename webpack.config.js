const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractCSS = new ExtractTextPlugin('bundle.css')
const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
});

module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['react', 'es2016']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({ // Instance 1
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }
        ]
    },
    plugins: [htmlWebpackPlugin, extractCSS]
};