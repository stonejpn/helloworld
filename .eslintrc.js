module.exports = {
  env: {
    browser: true,
    mocha: true,
  },
  extends: [
    "airbnb",
    "plugin:import/recommended"
  ],
  rules: {
    "import/no-commonjs": "warn"
  }
};
