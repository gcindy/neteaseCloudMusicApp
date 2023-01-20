/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-17 17:13:47
 * @LastEditTime: 2023-01-19 22:26:04
 */
import { StyleSheet } from "react-native";
import { px2dp, width, height } from "../../utils/px2dp";

export const mineStyle = StyleSheet.create({
  mineWrapper: {
    width,
    height,
    backgroundColor: "#C83D3C",
  },

  loginWrapper: {
    width,
    height,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  loginTitle: {
    color: "#f3f3f3",
    fontSize: px2dp(25),
    textAlign: "center",
    position: "absolute",
    top: "30%",
    left: "40%",
  },

  loginText: {
    color: "#f2f2f2",
  },

  button: {
    marginTop: px2dp(60),
    width: px2dp(300),
    borderRadius: px2dp(10),
  },
});
