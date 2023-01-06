/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-05 19:21:39
 * @LastEditTime: 2023-01-06 17:57:37
 */
import React from "react";
import { Icon } from "../icon";
import type { SvgProps, XmlProps } from "react-native-svg";

type tabBarItemType = {
  xml: string;
  focused?: boolean;
};

const TabBarItem: React.FC<tabBarItemType & SvgProps & XmlProps> = props => {
  const tintColor = props.focused ? "#C3463A" : "#494949";
  return <Icon type={props.xml} width={25} height={25} color={tintColor} />;
};

export default TabBarItem;
