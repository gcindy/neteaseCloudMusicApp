/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-05 19:12:43
 * @LastEditTime: 2023-01-06 18:00:19
 */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarItem from "./TabBarItem";
import HomeScreen from "../pages/home";
import MineScreen from "../pages/mine";
import PodcastScreen from "../pages/podcast";

const Tab = createBottomTabNavigator();

export const RootNavigatorBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return <TabBarItem focused={focused} xml={"home_icon"} />;
          } else if (route.name === "Podcast") {
            return <TabBarItem focused={focused} xml={"podcast_icon"} />;
          } else if (route.name === "Mine") {
            return <TabBarItem focused={focused} xml={"mine_icon"} />;
          }
        },
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
