/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-05 19:00:04
 * @LastEditTime: 2023-01-06 19:22:12
 */

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../utils/navigation";
import { registerAppList } from "./routes";

const Stack = createNativeStackNavigator();

const DynamicTabNavigator = () => {
  return (
    <NavigationContainer ref={navigatorRef => Navigation.initNavihator(navigatorRef)}>
      <Stack.Navigator initialRouteName="Home">
        {registerAppList.map((_, index) => (
          <Stack.Screen key={index} name={_.path} component={_.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DynamicTabNavigator;
