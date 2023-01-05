/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-05 19:12:43
 * @LastEditTime: 2023-01-05 19:20:00
 */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { HomeScreen, ProfileScreen, TicketScreen } from "./screen";
// import TabBarItem from "./TabBarItem";
import HomeScreen from "../pages/home";
import MineScreen from "../pages/mine";
import PodcastScreen from "../pages/podcast";

const Tab = createBottomTabNavigator();

export const RootNavigatorBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarIcon: ({ focused }) => {
        //   if (route.name === "home") {
        //     return (
        //       <TabBarItem
        //         focused={focused}
        //         normalIcon={require("../assets/tab/dark/home.png")}
        //         selectIcon={require("../assets/tab/dark/ac_home.png")}
        //       />
        //     );
        //   } else if (route.name === "ticket") {
        //     return (
        //       <TabBarItem
        //         focused={focused}
        //         normalIcon={require("../assets/tab/dark/collection.png")}
        //         selectIcon={require("../assets/tab/dark/ac_collection.png")}
        //       />
        //     );
        //   } else if (route.name === "profile") {
        //     return (
        //       <TabBarItem
        //         focused={focused}
        //         normalIcon={require("../assets/tab/dark/profile.png")}
        //         selectIcon={require("../assets/tab/dark/ac_profile.png")}
        //       />
        //     );
        //   }
        // },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#666666", // gray
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: "发现" }} />
      <Tab.Screen name="Podcast" component={PodcastScreen} options={{ tabBarLabel: "播客" }} />
      <Tab.Screen name="Mine" component={MineScreen} options={{ tabBarLabel: "我的" }} />
    </Tab.Navigator>
  );
};
