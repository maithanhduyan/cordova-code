const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const __DIST = 'www';
module.exports = {
  entry: {
    main: './src/js/main.js',
    styles: './src/css/index.css'
  },
  output: {
    path: path.resolve(__dirname, __DIST),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(fnt|mp3|ogg|png)$/,
        use: 'file-loader'
      },
      {
        test: /\.css$/, // Xử lý các tệp CSS
        use: [
          MiniCssExtractPlugin.loader, // Sử dụng MiniCssExtractPlugin để tạo tệp CSS riêng biệt
          'css-loader', // Xử lý CSS
        ],
      },
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/index.css', // Tên tệp CSS đầu ra
    }),
  ],
};
