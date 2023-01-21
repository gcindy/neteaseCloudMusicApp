/*
 * @Descripttion: 用户api
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-17 17:34:35
 * @LastEditTime: 2023-01-20 21:09:13
 */
import { request } from "../../services";

export default class UserApi {
  static getUserInfo = async () => {
    await request(``, "GET");
  };
}
