/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-05 18:50:38
 * @LastEditTime: 2023-01-18 13:40:05
 */
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "@/hooks";

const HomeScreen = () => {
  const { usersInstance } = useStore();
  useEffect(() => {
    (async () => {
      await usersInstance.getSong(96);
    })();
  }, []);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default observer(HomeScreen);
