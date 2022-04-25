module.exports = {
  assumptions: {
    setPublicClassFields: true,
  },
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        targets: {
          esmodules: true,
        },
        exclude: [
          "@babel/plugin-transform-parameters",
          "@babel/plugin-proposal-optional-chaining",
          "@babel/plugin-proposal-object-rest-spread",
          "@babel/plugin-transform-template-literals",
          "@babel/plugin-transform-async-to-generator",
          "@babel/plugin-transform-typeof-symbol",
          "@babel/plugin-transform-classes",
        ],
      },
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
        importSource: "react",
      },
    ],
  ],
  plugins: [
    [
      "babel-plugin-styled-components",
      {
        minify: true,
        displayName: false, // false to reduce bundle size
        fileName: false,
        pure: true,
        transpileTemplateLiterals: false,
        ssr: false,
      },
    ],
    "@babel/plugin-syntax-dynamic-import",
  ],
  env: {
    production: {
      only: ["app"],
      plugins: [
        [
          "transform-react-remove-prop-types",
          {
            removeImport: true,
          },
        ],
      ],
    },
    test: {
      plugins: ["@babel/plugin-transform-modules-commonjs", "dynamic-import-node"],
    },
  },
};
