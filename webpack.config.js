const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {

  const isDevelopment = options.mode !== 'production'

  return {
    watch: isDevelopment ? true : false,
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'inline-source-map' : undefined,
    entry: './src/index.js',
    output: {
      filename: isDevelopment ? '[name].js' : '[name].[hash].js',
      path: path.resolve(__dirname, 'docs')
    },
    devServer: {
      port: 8080,
      contentBase: path.join(__dirname, 'docs'),
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        hash: false,
        template: './src/index.html',
        templateParameters: {
          title   : 'Notas App',
          baseHref : isDevelopment ? '/' : '/notas-app/',
        }
      }),
      new HtmlWebpackPlugin({
        hash: false,
        filename: '404.html',
        template: './src/index.html',
        templateParameters: {
          title   : 'Notas App',
          baseHref : '/notas-app/',
        }
      })
    ],
    module: {
      rules: [
        {
          test: /\.txt$/i,
          use: ['html-loader'],
        },
      ],
    },
    resolveLoader: {
      modules: ['node_modules', path.resolve(__dirname, './src/loaders')]
    }
  };
}
;


