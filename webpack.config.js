const HtmlWebpackPlugin = require('html-webpack-plugin');

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
            apiUrl: JSON.stringify(process.env.APP_API_URL),
            client_id: JSON.stringify(process.env.APP_CLIENT_ID),
            client_secret: JSON.stringify(process.env.APP_CLIENT_SECRET),
            grant_type: JSON.stringify(process.env.APP_GRANT_TYPE),
            google_maps_api_key: JSON.stringify(process.env.GOOGLE_MAPS_API_KEY),
            mock_location_lat: JSON.stringify(process.env.MOCK_LOCATION_LAT),
            mock_location_lng: JSON.stringify(process.env.MOCK_LOCATION_LNG),
        })
    }
}