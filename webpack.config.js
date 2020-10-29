const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv').config( {
    path: path.join(__dirname, '.env')
} );

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: dotenv.parsed.APP_API_URL,
            client_id: dotenv.parsed.APP_CLIENT_ID,
            client_secret: dotenv.parsed.APP_CLIENT_SECRET,
            grant_type: dotenv.parsed.APP_GRANT_TYPE
        })
    }
}