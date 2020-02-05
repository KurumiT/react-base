const { resolve } = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || "false")),
});

const isProd = process.env.NODE_ENV === "production";

const fileEnv = dotenv.config({
  path: isProd ? "./environments/.env.production" : "./environments/.env.development",
}).parsed;
const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
  return prev;
}, {});

const config = {
  mode: isProd ? "production" : "development",
  entry: {
    index: ["babel-polyfill", "./src/index.tsx"],
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(), // в результате хэши не будут неожиданно меняться
  ],
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".sass"],
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(sass|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
        }),
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[hash].[ext]",
        },
      },
      {
        test: /\.otf$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[hash].[ext]",
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || "false")),
    }),
    new HtmlWebpackPlugin({
      title: fileEnv.SITE_NAME,
      template: "src/index.html",
    }),
    new webpack.DefinePlugin(envKeys),
    new ExtractTextPlugin({
      filename: "[name].[hash].css",
    }),
  ],
};

if (isProd) {
  config.optimization = {
    minimizer: [new TerserWebpackPlugin()],
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace("@", "")}`;
          },
        },
      },
    },
  };
} else {
  config.devServer = {
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    stats: "errors-only",
    overlay: true,
    historyApiFallback: true,
    contentBase: "./src",
  };
}

module.exports = config;
