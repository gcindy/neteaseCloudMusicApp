/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-05 19:21:39
 * @LastEditTime: 2023-01-06 09:45:50
 */
import React from "react";
import { Image } from "react-native";

type tabBarItemType = {
  // tintColor?: string;
  // selectIcon?: string;
  xml: string;
  focused?: boolean;
};

import { SvgXml } from "react-native-svg";
import type { SvgProps, XmlProps } from "react-native-svg";

const TabBarItem: React.FC<tabBarItemType & SvgProps & XmlProps> = ({ focused, xml }) => {
  const tintColor = focused ? "#B63C35" : "#494949";

  return <SvgXml xml={xml} width={25} height={25} color={tintColor} />;
};

export default TabBarItem;
