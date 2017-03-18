module.exports = {
  env: {
    browser: true,
    mocha: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
  },
  extends: [
    'airbnb-base',
    './.eslintrc.d/inferno.js',
    './.eslintrc.d/jsx-a11y.js',
    'plugin:import/recommended',
  ],
  settings: {
    'import/extensions': ['.js', '.jsx'],
  },
  rules: {
    'arrow-body-style': ['error', 'always'],
    'import/no-commonjs': 'warn',
    'inferno/inferno-in-jsx-scope': 'off',
  },
};
