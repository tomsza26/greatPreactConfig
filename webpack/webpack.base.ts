import { Configuration, ProvidePlugin } from 'webpack';

const cssVariablesMap = {};

export const configBase: Configuration = {
  output: {
    // Compile into js/build.js
    publicPath: '/',
  }, // Merge with env dependent settings
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   use: "ts-loader",
      //   exclude: /node_modules/,
      // },
      // {
      //   test: /\.js?$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "string-replace-loader",
      //     options: {
      //       search: "var\\((--[a-z-]+)\\)|'(--[a-z-]+)'",
      //       replace: (match, p1, p2) => {
      //         const varValue = p1 || p2;
      //         let newValue = cssVariablesMap[varValue];

      //         if (!newValue) {
      //           newValue = `--${Object.keys(cssVariablesMap).length}`;
      //           cssVariablesMap[varValue] = newValue;
      //         }

      //         return p1 ? `var(${newValue})` : `'${newValue}'`;
      //       },
      //       flags: "g",
      //     },
      //   },
      // },
      {
        test: /\.(jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader',
        },
      },
      {
        // Preprocess our own .css files
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 0,
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  // plugins: plugins.concat([
  //   // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
  //   // inside your code for any environment checks; Terser will automatically
  //   // drop any unreachable code.
  //   new webpack.EnvironmentPlugin({
  //     NODE_ENV: "development",
  //   }),
  // ]),
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.tsx', '.ts', '.js'],
    mainFields: ['browser', 'jsnext:main', 'main'],
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
  plugins: [
    new ProvidePlugin({
      React: 'react',
    }),
  ],
  target: 'web', // Make web variables accessible to webpack, e.g. window
};
