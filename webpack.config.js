const path = require("path");

module.exports = {
    context: __dirname,
    entry: "./js/ClientApp.jsx",
    devtool: "cheap-eval-source-map",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    devServer: {
        publicPath: "/public/",
        historyApiFallback: true
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },
    module: {
        rules: [{
                enforce: "pre",
                test: /\.jsx?$/,
                loader: "eslint-loader",
                exclude: "/node_modules/",
                options: {
                    fix: true
                }
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader"
            }
        ]
    }
};