const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { optimize } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 빌드시 css 파일을 사용하는 js파일별로 별도의 css 파일 추출해 번들에 추가
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { split } = require('lodash');

module.exports = {
  entry: './src/index.js',
  // app, vendor를 각각 번들로 생성 (chunk로 부름)
  // entry: {
  //   app: './src/App.js',
  //   vendor: './src/VendorApp.js',
  //   // app: {
  //   //   import: './src/App.js',
  //   //   dependOn: 'shared',
  //   // },
  //   // vendor: {
  //   //   import: './src/VendorApp.js',
  //   //   dependOn: 'shared',
  //   // },
  //   // shared: 'lodash',
  // },
  mode: 'development',
  devtool: false,
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 4000,
  },
  optimization: {
    minimize: false,
    // splitChunks: 청크별로 공통된 모듈을 별도의 파일로 추출
    splitChunks: {
      chunks: 'all',
    },
  },
  /**
   * name: chunk 이름
   * chunkhash: chunk 내용이 변경되면 hash 값이 변경됨
   * 
   */
  output: {
    publicPath: 'auto',
    filename: '[name].[chunkhash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.(png|jpg|gif|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              publicPath: path.join(__dirname, 'dist'),
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
    }),
  ],
};
