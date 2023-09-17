// https://prettier.io/docs/en/options.html
module.exports = {
  tabWidth: 2,
  printWidth: 150,
  semi: false,
  useTabs: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'es5', // 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值"<none|es5|all>"，默认none
  bracketSpacing: true, // 在对象中文字和括号之间打印空格
  bracketSameLine: true,
  arrowParens: 'avoid', // 在单独的箭头函数参数周围包括括号 always：(x) => x \ avoid：x => x
  htmlWhitespaceSensitivity: 'css', // 指定HTML文件的全局空格敏感度 css\strict\ignore
  vueIndentScriptAndStyle: false, // Vue文件脚本和样式标签缩进
  endOfLine: 'lf',
  singleAttributePerLine: false,
}
