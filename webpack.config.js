const path = require("path");

module.exports = {
  entry: "./src",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react"]
          }
        }
      }
    ]
  },
  devServer: {
    open: true,
    proxy: {
      "/api": "http://localhost:3000"
    },
    // contentBase: path.join(__dirname, "public"), // boolean | string | array, static file location
    // compress: true, // enable gzip compression
    historyApiFallback: true // true for index.html upon 404, object for multiple paths
    // hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    // https: false, // true for self-signed, object for cert authority
    // noInfo: true // only errors & warns on hot reload
    // ...
  }
};
