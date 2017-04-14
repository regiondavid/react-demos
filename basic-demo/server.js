var webpack = require('webpack')
var webpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config.js')

var compile = webpack(config);
var server = new webpackDevServer(compile, {
  historyApiFallback: true,
  hot: true,
  inline: true,
  progress: true,
  contentBase: './app',
  stats: {color: true}
});

config.entry.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");

server.listen(8080, "localhost", function(err) {
  if (err) {
    console.log(err)
  }
  console.log('listening at localhost')
});