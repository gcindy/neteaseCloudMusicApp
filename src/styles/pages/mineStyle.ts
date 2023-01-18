/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-17 17:13:47
 * @LastEditTime: 2023-01-18 10:56:53
 */
import { StyleSheet } from "react-native";
import { px2dp, width, height } from "../../utils/px2dp";
// import { commonStyle } from "../common";
// import { globalStyle } from "../global";

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

  button: {
    marginTop: px2dp(60),
    width: px2dp(300),
    borderRadius: px2dp(10),
  },
});
