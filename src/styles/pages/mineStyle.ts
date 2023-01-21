/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-17 17:13:47
 * @LastEditTime: 2023-01-21 17:12:12
 */
import { StyleSheet } from "react-native";
import { px2dp, width, height } from "../../utils/px2dp";

export const mineStyle = StyleSheet.create({
  mineWrapper: {
    width,
    height,
    backgroundColor: "#C83D3C",
  },
  /// 我的
  mineBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginHorizontal: px2dp(27),
    paddingTop: px2dp(24),
    paddingBottom: px2dp(19),
    borderRadius: px2dp(10),
    marginBottom: px2dp(54),
  },

  avatarImg: {
    width: px2dp(70),
    height: px2dp(70),
    borderRadius: px2dp(50),
  },

  nickname: {
    fontWeight: "bold",
    marginVertical: px2dp(10),
    fontSize: px2dp(20),
    textAlign: "left",
  },

  userinfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  userInfoText: {
    color: "#8c8d8d",
    marginRight: px2dp(24),
  },

  musicTypeBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  musicType: {
    color: "#8c8d8d",
    marginRight: px2dp(20),
    marginBottom: px2dp(20),
  },

  musicTypeActive: {
    color: "#333",
    borderBottomColor: "#C83D3C",
    borderBottomWidth: px2dp(2),
  },

  musicBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: px2dp(10),
  },

  musicImg: {
    width: px2dp(47),
    height: px2dp(47),
    marginRight: px2dp(8),
    borderRadius: px2dp(5),
  },

  musicTitleBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  musicTitle: {
    marginBottom: px2dp(12),
  },

  trackCount: {
    color: "#8c8d8d",
  },

  /// 登录
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
