const path = require('path')
// common js because we are just using in node

module.exports = {
  // node way of saying this is where project is from
  context: __dirname,
  entry: './js/ClientApp.js',
  // this helps you find error in bundle
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
      test: /\.js$/,
      loader: 'babel-loader'
}
    ]
  }
}
