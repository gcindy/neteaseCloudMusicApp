/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-17 17:34:35
 * @LastEditTime: 2023-01-18 17:03:05
 */
import { request } from "../../services/request";

export default class UserApi {
  /**
   * 登录
   * @param data { 手机号，密码 }
   * @returns
   */
  static async loginByPassword(data: { phone: string; captcha: string }) {
    console.log("pass=====>>>", data);
    return await request(`/login/cellphone`, "POST", data);
  }

  static async loginByPasswords(phone: string, password: string) {
    console.log("pas=====>>>", phone, password);
    return await request(`/login/cellphone?phone=${phone}&password=${password}`, "POST");
    return await request(`/api/v2/login/cellphone?phone=${phone}&password=${password}`, "GET");
  }

  static async getSongs(type?: number) {
    return await request(`/top/song?type=${type}`, "GET");
  }
}
