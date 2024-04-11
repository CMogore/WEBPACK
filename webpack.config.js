const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // Define entry point
    entry: './src/index.js',
    // Define output point
    output: {
        filename: 'js/app.js',
        path: path.resolve(__dirname, 'dist/public')
    },
    mode: 'development',
    devServer: {
        hot:true,
        static: {
            directory: path.join(__dirname, 'dist/public'),
        },
        compress: true,
        port: 9000,
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "app",
            type: "css/mini-extract",
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "css/app.css",
      }),
    ],
};
