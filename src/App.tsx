/*
 * @Descripttion: 入口文件
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-05 18:55:28
 * @LastEditTime: 2023-01-18 09:04:11
 */

import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "@ant-design/react-native";
import { StoreProvider } from "./hooks/useStores";
import DynamicTabNavigator from "./navigation/DynamicTabNavigator";

LogBox.ignoreAllLogs(true); // 关闭黄色警告

const App = () => {
  return (
    <StoreProvider>
      <Provider>
        <SafeAreaProvider>
          <DynamicTabNavigator />
        </SafeAreaProvider>
      </Provider>
    </StoreProvider>
  );
};

export default App;
