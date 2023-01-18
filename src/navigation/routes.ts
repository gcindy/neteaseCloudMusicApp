/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-05 19:17:15
 * @LastEditTime: 2023-01-17 17:44:14
 */

import { RootNavigatorBottom } from "./RootNavigatorBottom";
import HomeScreen from "../pages/home";
import MineScreen from "../pages/mine";
import PodcastScreen from "../pages/podcast";
import LoginScreen from "../pages/login";

interface registerAppType {
  path: string;
  component: any;
}

const registerAppList: Array<registerAppType> = [
  { path: "root", component: RootNavigatorBottom },
  { path: "login", component: LoginScreen },
  { path: "home", component: HomeScreen },
  { path: "mine", component: MineScreen },
  { path: "podcast", component: PodcastScreen },
];

export { registerAppList };
