/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-13 15:53:15
 * @LastEditTime: 2023-01-17 16:40:25
 */
import { Dimensions } from "react-native";
import { GlobalConfig } from "../config";

export const width = Dimensions.get("window").width;

export const height = Dimensions.get("window").height;

export const ScrenWidth = Dimensions.get("screen").width;

export const ScrenHeight = Dimensions.get("screen").height;

export const px2dp = (uiEleWidth: number) => {
  const width = Dimensions.get("window").width;
  return (uiEleWidth * width) / GlobalConfig.UIWidth;
};
