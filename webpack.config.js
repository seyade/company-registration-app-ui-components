const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: devMode,
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|ttf|eot|otf|png|jpg|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              limit: 1000,
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
      {
        test: /\.stories\.(js|jsx)$/,
        loader: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
            },
          },
        ],
      },
      {
        test: /\.(html|njk|nunjucks)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'nunjucks-isomorphic-loader',
            query: {
              root: [path.resolve(__dirname, 'src/templates')],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/index.html',
      filename: 'index.html',
      inject: true,
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/incorporate.html',
      filename: 'incorporate.html',
      inject: true,
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/assets/',
        to: 'assets/',
      },
    ]),
  ],
};
