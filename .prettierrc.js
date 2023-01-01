/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-01 11:00:53
 * @LastEditTime: 2023-01-01 11:17:03
 */

module.exports = {
  tabWidth: 2, // ⼀个tab代表⼏个空格数，默认为80
  useTabs: false, // 是否使⽤tab进⾏缩进，默认为false，表示⽤空格进⾏缩减
  singleQuote: false, // 字符串是否使⽤单引号，默认为false，使⽤双引号
  printWidth: 120, // 换⾏字符串阈值
  semi: true, // 句末加分号,默认为true
  trailingComma: "all", // 是否使⽤尾逗号，有三个可选值"<none|es5|all>"
  bracketSpacing: true, // 对象⼤括号直接是否有空格，默认为true，效果：{ foo: bar }
  jsxBracketSameLine: true, // jsx > 是否另起⼀⾏
  arrowParens: "avoid", // (x) => {} 是否要有⼩括号
  requirePragma: false, // 是否要注释来决定是否格式化代码
};
