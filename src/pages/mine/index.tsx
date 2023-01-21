/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-05 18:50:38
 * @LastEditTime: 2023-01-21 16:47:04
 */

import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@ant-design/react-native";
import { observer } from "mobx-react-lite";
import { forEach } from "lodash";
import { Navigation } from "../../utils/navigation";
import { useStore } from "../../hooks";
import { getStorage } from "@/utils/storage";
import { mineStyle } from "../../styles";
import { px2dp } from "../../utils/px2dp";

const MineScreen = () => {
  const { usersInstance } = useStore();

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
  }); // 用户信息
  const [playList, setPlayList] = useState<Array<MineInstance.playlistType>>([]); // 创建歌单列表
  const [collectPlayList, setCollectPlayList] = useState<Array<MineInstance.playlistType>>([]); // 创建歌单列表

  const goToLogin = () => {
    Navigation.navigate("login");
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    if (userInfo.userId) {
      getPlayList();
    }
  }, [userInfo]);

  // 获取用户信息
  const getUserInfo = async () => {
    const userInfo_res = JSON.parse(await getStorage("userinfo"));

    setUserInfo({ ...userInfo_res });
  };

  const getPlayList = async () => {
    const play_list_res: MineInstance.playListInterface = (await usersInstance.getUserPlaylist(
      userInfo.userId,
    )) as MineInstance.playListInterface;

    const list: Array<MineInstance.playlistType> = [];
    const collectList: Array<MineInstance.playlistType> = [];

    forEach(play_list_res.playlist, item => {
      if (item.creator.nickname == userInfo.nickname) {
        list.push({ ...item });
      } else {
        collectList.push({ ...item });
      }
    });
    console.log("list=====>>>", list);
    console.log("collectList=====>>>", collectList);
    setPlayList([...list]);
    setCollectPlayList([...collectList]);
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
        <ScrollView>
          <View style={[mineStyle.mineBox, { paddingVertical: px2dp(30), paddingHorizontal: px2dp(30) }]}>
            {playList &&
              playList.map((item: any, key: number) => (
                <View style={mineStyle.musicBox} key={key}>
                  <Image style={mineStyle.musicImg} source={{ uri: item.coverImgUrl }} />
                  <View style={mineStyle.musicTitleBox}>
                    <Text style={mineStyle.musicTitle}>{item.name}</Text>
                    <Text style={mineStyle.trackCount}>{item.trackCount}首</Text>
                  </View>
                </View>
              ))}
          </View>
        </ScrollView>
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

export default observer(MineScreen);
