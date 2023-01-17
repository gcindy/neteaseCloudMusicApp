/*
 * @Descripttion: 底部导航栏
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-05 19:12:43
 * @LastEditTime: 2023-01-17 16:35:46
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
      initialRouteName="Home"
      screenOptions={() => ({
        tabBarActiveTintColor: "#C3463A",
        tabBarInactiveTintColor: "#494949",
        headerShown: false,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "发现",
          tabBarIcon: ({ focused }) => <TabBarItem focused={focused} xml="home_icon" />,
        }}
      />
      <Tab.Screen
        name="Podcast"
        component={PodcastScreen}
        options={{
          title: "播客",
          tabBarIcon: ({ focused }) => <TabBarItem focused={focused} xml="podcast_icon" />,
        }}
      />
      <Tab.Screen
        name="Mine"
        component={MineScreen}
        options={{
          title: "我的",
          tabBarIcon: ({ focused }) => <TabBarItem focused={focused} xml="mine_icon" />,
        }}
      />
    </Tab.Navigator>
  );
};
