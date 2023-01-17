/*
 * @Descripttion: svg组件封装
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-05 19:28:17
 * @LastEditTime: 2023-01-17 16:30:42
 */

import React from "react";
import { SvgFromXml, SvgXml } from "react-native-svg";
import type { SvgProps, XmlProps } from "react-native-svg";

// 这里提供了最基本的svg模块封装，SvgXml用于展示svg， props是我们对SvgXml做出的样式修改，比方说 大小、样式等等

export const SvgToXml: React.FC<SvgProps & XmlProps> = props => {
  return <SvgFromXml {...props} />;
};
