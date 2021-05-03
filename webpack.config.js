const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const dotenv = require("dotenv");

const fileEnv = dotenv.config({ path: ".env" }).parsed;
const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
  return prev;
}, {});

const config = {
  entry: ["react-hot-loader/patch", "./src/Client.tsx"],
  // output: {
  //   path: path.resolve(__dirname, "dist"),
  //   filename: "[name].[contenthash].js",
  // },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        // use: {
        //   loader: "babel-loader",
        //   options: {
        //     presets: [["@babel/preset-env", { modules: false }]],
        //     plugins: ["@babel/plugin-syntax-dynamic-import"],
        //   },
        // },
        exclude: /node_modules/,
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(svg|jpe?g|png|ttf|eot|woff|woff2)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false,
              name: "[path][name].[hash].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
      "@public": path.join(__dirname, "", "public"),
      "@models": path.join(__dirname, "", "src/models"),
      "@components": path.join(__dirname, "", "src/components"),
      "@pages": path.join(__dirname, "", "src/pages"),
      "@helpers": path.join(__dirname, "", "src/utils"),
      "@store": path.join(__dirname, "", "src/store/*"),
      "@middlewares": path.join(__dirname, "", "src/store/middlewares"),
      "@actions": path.join(__dirname, "", "src/store/actions"),
      "@reducers": path.join(__dirname, "", "src/store/reducers"),
      "@types": path.join(__dirname, "", "src/types"),
      "@containers": path.join(__dirname, "", "src/containers"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.ico",
      template: "./src/server/Browser.html",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),
    new webpack.DefinePlugin(envKeys),
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 4200,
    watchContentBase: true,
    progress: true,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};

module.exports = (env, argv) => {
  const watchMode = argv.liveReload || false;
  config.output = {
    filename: watchMode ? "assets/[name].[hash].js" : "assets/[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  };

  // if (argv.hot) {
  //   // Cannot use 'contenthash' when hot reloading is enabled.
  //   config.output.filename = "[name].[hash].js";
  // }
  return config;
};
