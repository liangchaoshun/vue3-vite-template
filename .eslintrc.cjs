// https://eslint.org
module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  // off: 0, warn: 1, error: 2
  rules: {
    'no-var': 2,
    'no-new': 0,
    'prefer-const': 1,
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': 1,
    'no-nested-ternary': 0, // 允许嵌套的三元表达式
    'comma-dangle': 0, // 允许尾部的逗号
    'arrow-parens': [2, 'as-needed'],
    'operator-linebreak': 0,
    'object-curly-newline': 0,
    'no-plusplus': 0, // 可以用 i++
    'import/prefer-default-export': 0,
    'global-require': 1,
    'no-bitwise': 0, // 允许二进制运算符
    'no-underscore-dangle': 0, // 允许变量以下划线（_）开头命名
    'no-param-reassign': 1, // 允许并警告赋值给参数
    'no-extra-boolean-cast': 0, // 允许双取反转 boolean
    'object-curly-spacing': [1, 'always'],
    'vue/multi-word-component-names': 1,
    camelcase: 0, // 允许变量非驼峰式命名
  },
}
