/*
 * @Descripttion: 入口文件
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-05 18:55:28
 * @LastEditTime: 2023-01-05 19:05:06
 */

import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DynamicTabNavigator from "./navigation/DynamicTabNavigator";

const App = () => {
  return (
    <SafeAreaProvider>
      <DynamicTabNavigator />
    </SafeAreaProvider>
  );
};

export default App;
