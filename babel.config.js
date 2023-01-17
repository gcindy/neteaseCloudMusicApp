/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-05 16:38:23
 * @LastEditTime: 2023-01-17 15:56:22
 */

module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@": "./src",
        },
      },
    ],
    [
      "babel-plugin-inline-import",
      {
        extensions: [".svg"],
      },
    ],
    "react-native-reanimated/plugin",
    ["import", { libraryName: "@ant-design/react-native" }], // 与 Web 平台的区别是不需要设置 style
  ],
};
