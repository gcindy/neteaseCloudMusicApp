/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-05 18:50:38
 * @LastEditTime: 2023-01-18 10:27:37
 */

// import { useEffect } from "react";
import { View, Text } from "react-native";
import { Icon } from "@/icon";
import { Button } from "@ant-design/react-native";
import { Navigation } from "../../utils/navigation";

const MineScreen = () => {
  const goToLogin = () => {
    Navigation.navigate("login");
  };

  return (
    <View>
      <Icon type="search"></Icon>
      <Text>MineScreen</Text>
      <Button type="primary" onPress={() => goToLogin()}>
        哈哈哈
      </Button>
    </View>
  );
};

export default MineScreen;
