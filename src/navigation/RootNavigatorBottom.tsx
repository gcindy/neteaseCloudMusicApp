/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-05 19:12:43
 * @LastEditTime: 2023-01-06 10:45:07
 */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeIcon, MineIcon, PodcastIcon } from "../assets/svg";
import TabBarItem from "./TabBarItem";
import HomeScreen from "../pages/home";
import MineScreen from "../pages/mine";
import PodcastScreen from "../pages/podcast";

const Tab = createBottomTabNavigator();

export const RootNavigatorBottom = () => {
  const arrowType: any = {
    home: HomeIcon,
    mine: MineIcon,
    podcast: PodcastIcon,
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarIcon: ({ focused }) => {
        //   if (route.name === "Home") {
        //     return <TabBarItem focused={focused} xml={arrowType["home"]} />;
        //   } else if (route.name === "Podcast") {
        //     return <TabBarItem focused={focused} xml={arrowType["podcast"]} />;
        //   } else if (route.name === "Mine") {
        //     return <TabBarItem focused={focused} xml={arrowType["mine"]} />;
        //   }
        // },
        tabBarActiveTintColor: "#C3463A",
        tabBarInactiveTintColor: "#494949",
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: "发现" }} />
      <Tab.Screen name="Podcast" component={PodcastScreen} options={{ tabBarLabel: "播客" }} />
      <Tab.Screen name="Mine" component={MineScreen} options={{ tabBarLabel: "我的" }} />
    </Tab.Navigator>
  );
};
