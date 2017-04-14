var path = require('path');

module.exports = {
  entry: [
    path.resolve(__dirname, './app/main.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ]
}