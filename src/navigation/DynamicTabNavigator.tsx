/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-05 19:00:04
 * @LastEditTime: 2023-01-21 11:36:27
 */

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../utils/navigation";
import { registerAppList } from "./routes";
import { useEffect } from "react";
import { getStorage } from "@/utils/storage";

const Stack = createNativeStackNavigator();

const DynamicTabNavigator = () => {
  useEffect(() => {
    (async () => {
      const token = await getStorage("token");
      token ? Navigation.navigate("mine") : Navigation.navigate("login");
    })();
  }, []);

  return (
    <NavigationContainer ref={navigatorRef => Navigation.initNavihator(navigatorRef)}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        {registerAppList.map((_, index) => (
          <Stack.Screen key={index} name={_.path} component={_.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DynamicTabNavigator;
