const htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: '/.html$/',
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputpath: '/img'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new htmlwebpackplugin({
      template: './Src/index.html',
      filename: 'index.html'
    })
  ]
};
