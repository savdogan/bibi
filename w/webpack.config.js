module.exports = {
    entry: "./rs/index.js",
    output: {
        path: "sc",
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react']
                }
            }
        ]
    }
};