const path = require('path');

module.exports = {
  watch: true,
  mode: "development",
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs')
  },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, 'docs'),
    historyApiFallback: true
  }
};