module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    //'plugin:prettier/recommended',
    'eslint:recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
    indent: ['error', 2],
    quotes: ['warn', 'single'],
    // "vue/html-indent": ["error", 2, {
    //   "attribute": 1,
    //   "baseIndent": 1,
    //   "closeBracket": 0,
    //   "alignAttributesVertically": true,
    //   "ignores": []
    // }]
  },
};
