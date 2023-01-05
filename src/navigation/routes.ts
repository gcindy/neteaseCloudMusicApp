/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-05 19:17:15
 * @LastEditTime: 2023-01-05 19:18:31
 */
import HomeScreen from "../pages/home";
import MineScreen from "../pages/mine";
import PodcastScreen from "../pages/podcast";
import { RootNavigatorBottom } from "./RootNavigatorBottom";

interface registerAppType {
  path: string;
  component: any;
}

const registerAppList: Array<registerAppType> = [
  { path: "root", component: RootNavigatorBottom },
  { path: "home", component: HomeScreen },
  { path: "mine", component: MineScreen },
  { path: "podcast", component: PodcastScreen },
];

export { registerAppList };
