const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv').config();

const configGenerator = () => {
    if (!('error' in dotenv)) {
        return JSON.stringify({
            apiUrl: dotenv.parsed.APP_API_URL,
            client_id: dotenv.parsed.APP_CLIENT_ID,
            client_secret: dotenv.parsed.APP_CLIENT_SECRET,
            grant_type: dotenv.parsed.APP_GRANT_TYPE,
            google_maps_api_key: dotenv.parsed.GOOGLE_MAPS_API_KEY,
            mock_location_lat: dotenv.parsed.MOCK_LOCATION_LAT,
            mock_location_lng: dotenv.parsed.MOCK_LOCATION_LNG
        });
    }

    return JSON.stringify({
        apiUrl: JSON.stringify(process.env.APP_API_URL),
        client_id: JSON.stringify(process.env.APP_CLIENT_ID),
        client_secret: JSON.stringify(process.env.APP_CLIENT_SECRET),
        grant_type: JSON.stringify(process.env.APP_GRANT_TYPE),
        google_maps_api_key: JSON.stringify(process.env.GOOGLE_MAPS_API_KEY),
        mock_location_lat: JSON.stringify(process.env.MOCK_LOCATION_LAT),
        mock_location_lng: JSON.stringify(process.env.MOCK_LOCATION_LNG)
    })
};

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
        config: configGenerator()
    }
}