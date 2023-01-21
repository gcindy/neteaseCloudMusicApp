/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-05 18:50:38
 * @LastEditTime: 2023-01-21 12:15:05
 */

import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { Button } from "@ant-design/react-native";
import { Navigation } from "../../utils/navigation";
import { getStorage } from "@/utils/storage";
import { Icon } from "@/icon";
import { mineStyle } from "../../styles";
import { SafeAreaView } from "react-native-safe-area-context";

const MineScreen = () => {
  const [userInfo, setUserInfo] = useState<MineInstance.userInfoInterface>({
    accountStatus: 0,
    authStatus: 0,
    authority: 0,
    avatarDetail: null,
    avatarImgId: 0,
    avatarImgIdStr: "",
    avatarImgId_str: "",
    avatarUrl: "",
    backgroundImgId: 0,
    backgroundImgIdStr: "",
    backgroundUrl: "",
    birthday: 0,
    city: 0,
    defaultAvatar: false,
    description: "",
    detailDescription: "",
    djStatus: 0,
    eventCount: 0,
    expertTags: null,
    experts: {},
    followed: false,
    followeds: 0,
    follows: 0,
    gender: 0,
    mutual: false,
    nickname: "",
    playlistBeSubscribedCount: 0,
    playlistCount: 0,
    province: 0,
    remarkName: null,
    signature: "",
    userId: 0,
    userType: 0,
    vipType: 0,
  });

  const goToLogin = () => {
    Navigation.navigate("login");
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  // 获取用户信息
  const getUserInfo = async () => {
    const userInfo_res = JSON.parse(await getStorage("userinfo"));

    setUserInfo({ ...userInfo_res });
  };

  // 已登录
  const renderUserInformation = () => {
    return (
      <>
        <View style={mineStyle.mineBox}>
          <Image source={{ uri: userInfo.avatarUrl }} style={mineStyle.avatarImg} />
          <Text style={mineStyle.nickname}>{userInfo.nickname}</Text>
          <View style={mineStyle.userinfo}>
            <Text style={mineStyle.userInfoText}>{userInfo.follows}关注</Text>
            <Text style={mineStyle.userInfoText}>{userInfo.followeds}粉丝</Text>
            <Text style={mineStyle.userInfoText}>Lv.{userInfo.vipType}</Text>
          </View>
        </View>
      </>
    );
  };

  // 未登录
  const renderLogin = () => {
    return (
      <Button onPress={() => goToLogin()}>
        <Text>立即登录</Text>
      </Button>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <>{!userInfo.nickname ? renderLogin() : renderUserInformation()}</>
      </View>
    </SafeAreaView>
  );
};

export default MineScreen;
