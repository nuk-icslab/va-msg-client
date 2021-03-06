"use strict";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const utils = require("./utils");

module.exports = {
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      assets: utils.resolve("assets"),
      pages: utils.resolve("src/pages"),
      static: utils.resolve("static"),
      components: utils.resolve("src/components"),
      router: utils.resolve("src/router"),
      services: utils.resolve("src/services"),
    },
    fallback: { querystring: require.resolve("querystring-es3") },
  },
  entry: {
    index: "./src/index.js",
    callback: "./src/services/SEAL/im-callback.js",
    renew: "./src/services/SEAL/im-silent-renew.js",
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   use: "eslint-loader",
      //   enforce: "pre",
      // },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            name: utils.assetsPath("img/[name].[hash:7].[ext]"),
          },
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            name: utils.assetsPath("media/[name].[hash:7].[ext]"),
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            name: utils.assetsPath("fonts/[name].[hash:7].[ext]"),
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      chunks: ["index"],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: "callback.html",
      template: "src/pages/empty_template.html",
      chunks: ["callback"],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: "silent-renew.html",
      template: "src/pages/empty_template.html",
      chunks: ["renew"],
      inject: true,
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      {
        from: utils.resolve("static"),
        to: utils.resolve("dist"),
        toType: "dir",
      },
    ]),
  ],
};
