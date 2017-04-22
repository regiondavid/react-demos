var path = require('path')

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}