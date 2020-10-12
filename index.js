module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        targets: {
          ie: "11",
        },
        corejs: 3,
      },
    ],
    "@babel/preset-react",
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 3,
        regenerator: true,
      },
    ],
  ],
};
