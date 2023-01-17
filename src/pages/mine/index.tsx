/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-05 18:50:38
 * @LastEditTime: 2023-01-17 16:31:01
 */

import { View, Text } from "react-native";
import { Icon } from "@/icon";
import { Toast, Button } from "@ant-design/react-native";

const MineScreen = () => {
  return (
    <View>
      <Icon type="search"></Icon>
      <Text>MineScreen</Text>
      <Button type="primary" onPress={() => Toast.info("点击到了")}>
        哈哈哈
      </Button>
    </View>
  );
};

export default MineScreen;
