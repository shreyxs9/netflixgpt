const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');

module.exports = {
    plugins: [
        new CspHtmlWebpackPlugin({
            'script-src': ["'self'", "blob:"],
        }),
    ],
};
