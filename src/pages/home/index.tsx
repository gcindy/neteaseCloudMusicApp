/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-05 18:50:38
 * @LastEditTime: 2023-01-19 22:28:24
 */
import React from "react";
import { Text } from "react-native";
import { observer } from "mobx-react-lite";
import { Button } from "@ant-design/react-native";
import { getStorage } from "@/utils/storage";
import { SafeAreaView } from "react-native-safe-area-context";
// import { useStore } from "@/hooks";

const HomeScreen = () => {
  // const { usersInstance } = useStore();
  // useEffect(() => {
  //   (async () => {
  //     await usersInstance.getSong(96);
  //   })();
  // }, []);

  const getUserInfo = async () => {
    const token = await getStorage("token");
    const cookie = await getStorage("cookie");
    const profile = await getStorage("userinfo");

    console.log("token&cookie&profile", token, profile, cookie);
  };

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>

      <Button
        type="primary"
        onPress={() => {
          getUserInfo();
        }}>
        获取存储数据
      </Button>
    </SafeAreaView>
  );
};

export default observer(HomeScreen);
