// Important modules this config uses
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const { HashedModuleIdsPlugin } = require("webpack").ids;
// const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

const PACKAGE = require("../package.json");
const packageVersion = PACKAGE.version.replace(/\.+/gi, "_");

const origin = "";
const publicPath = "";

module.exports = require("./webpack.base.babel")({
  mode: "production",

  // In production, we skip all hot-reloading stuff
  entry: [path.join(process.cwd(), "app/app.js")],

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].chunk.js",
    // publicPath,
    clean: true,
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
          mangle: {
            properties: {
              regex: /^_private_/,
            },
          },
        },
        extractComments: false,
        parallel: true,
      }),
    ],
    nodeEnv: "production",
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: false,
    splitChunks: {
      chunks: "all",
      maxInitialRequests: 10,
      minSize: 0,
      cacheGroups: {
        modules: {
          test: /[\\/]node_modules[\\/]/,
          // name: 'npm.modules',
          priority: -10,
          name: "npm",
        },
        /* styles: {
          test: /styles([a-zA-Z]+)?\.js/,
          priority: -15,
          name: 'styles',
        },
        utils: {
          test: /[\\/]utils[\\/]|utils\.js|Swipe\.js/,
          priority: -15,
          name: 'utils',
        },
        themes: {
          test: /[\\/]Themes[\\/]/,
          priority: -20,
          name: 'themes',
        }, */
      },
    },
  },

  plugins: [
    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: "app/index.html",
      templateParameters: {},
      filename: `v${packageVersion}/index.html`,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),

    // todo ServiceWorkerWebpackPlugin here

    /* new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }), */

    new WebpackPwaManifest({
      name: "Great Preact Boilerplate",
      short_name: "Great Preact Boilerplate",
      description: "Great Preact Boilerplate",
      background_color: "#fff",
      theme_color: "#4d5964",
      inject: true,
      ios: true,
      // publicPath,
      // start_url: origin,
      // icons: [
      //   {
      //     src: path.resolve("app/images/icon-512x512.png"),
      //     sizes: [72, 96, 128, 144, 192, 384, 512],
      //   },
      //   {
      //     src: path.resolve("app/images/icon-512x512.png"),
      //     sizes: [120, 152, 167, 180],
      //     ios: true,
      //   },
      // ],
    }),

    new HashedModuleIdsPlugin({
      hashFunction: "sha256",
      hashDigest: "hex",
      hashDigestLength: 20,
    }),

    // todo FileManagerPlugin here

    new BundleAnalyzerPlugin(),
  ],

  performance: {
    assetFilter: (assetFilename) => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
});
