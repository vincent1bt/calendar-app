module.exports = {
  entry: {
    index: __dirname + "/js/index.js"
  },
  output: {
    filename: "index.js",
    path: __dirname + "/dist"
  },
  module: {
    loaders: [
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
    root: __dirname + "/js",
    extensions: ["", ".js"],
    moduleDirectories: ["node_modules"]
  }
}
