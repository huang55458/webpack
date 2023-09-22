const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const target = 'https://a.chumeng1.top'
const PORT = 10000
const local = `http://localhost:${PORT}`
// const local = `http://127.0.0.1:${PORT}`

const webpack = require('webpack');

[
  new webpack.DefinePlugin({
    MY_ENV: JSON.stringify('dev'),
  }),
],


module.exports = {
  // entry: './src/index.js',
  entry: {
    index: './src/login/index.js',
    // print: './src/print.js',
    // index: {
    //   import: './src/index.js',
    //   dependOn: 'shared',
    // },
    // another: {
    //   import: './src/another-module.js',
    //   dependOn: 'shared',
    // },
    // // page: ['./analytics', './app'],
    // shared: 'lodash',
  },
  devtool: 'inline-source-map', // 显示源代码错误位置
  devServer: {
    // disableHostCheck: true,
    host: '0.0.0.0',
    // contentBase: path.resolve(__dirname, './'),
    static: './',
    // stats: { colors: true,
    //     env: true,
    //     timings: true,
    //     warnings: false,
    //     errors: true,
    //     all: false
    // },
    port: 10000,
    proxy: {
      '/api/*': {
        changeOrigin: true,
        target,
        onProxyReq(proxyReq, req, res) {
          console.log(`${target}${req.path}`)
          proxyReq.setHeader('Referer', `${target}${req.path}`)
        },
        router: () => target
      },
      '/page/*.html': {
        target: local,
        pathRewrite: { '/page/': '/src/page/' },
      },
      '/': {
        target: local,
        pathRewrite: { '^/.*': '/src/login/login.html' },
        bypass(req) {
          if (/.*\..*$/.test(req.path)) return req.path
        }
      },
    },
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: '管理输出',
  //   }),
  // ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: 'scripts/[name].bundle.js',
    publicPath: '/dist/'
    // clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    // splitChunks: {
    //   chunks: 'all',
    // },
  },
  mode: 'development'
};