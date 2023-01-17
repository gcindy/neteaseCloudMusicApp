/*
 * @Descripttion: 入口文件
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-05 18:55:28
 * @LastEditTime: 2023-01-17 16:29:01
 */

import { LogBox } from "react-native";
import { Provider } from "@ant-design/react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DynamicTabNavigator from "./navigation/DynamicTabNavigator";

LogBox.ignoreAllLogs(true); // 关闭黄色警告

const App = () => {
  return (
    <Provider>
      <SafeAreaProvider>
        <DynamicTabNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
