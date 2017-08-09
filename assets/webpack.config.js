const path = require('path');

module.exports = {
  entry: {
    index: __dirname + "/js/index.js"
  },
  output: {
    filename: "index.js",
    path: __dirname + "/../static"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'js'),
      'node_modules'
    ]
  },
  target: 'web',
}
