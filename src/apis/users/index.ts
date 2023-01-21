/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-17 17:34:35
 * @LastEditTime: 2023-01-21 15:36:54
 */
import { request } from "@/services/http";

export default class UserApi {
  /**
   * 登录
   * @param data { 手机号，验证码 }
   * @returns
   */
  static async loginByCaptcha(data: { phone: string; captcha: string }) {
    // const login_res = await request(`/login/cellphone?phone=${data.phone}&captcha=${data.captcha}`, "GET", data);
    const login_res = await request(`/login/cellphone`, "GET", data);
    return login_res;
  }

  /**
   * 获取验证码
   * @param phone 手机号
   * @returns 验证码
   */
  static async getCaptchaNumber(phone: string) {
    return await request(`/captcha/sent?phone=${phone}`, "GET");
  }

  /**
   * 校验验证码是否正确
   * @param phone 手机号
   * @param captcha 验证码
   * @returns 是否验证成功
   */
  static async checkCode(phone: string, captcha: string) {
    return await request(`/captcha/verify?phone=${phone}&captcha=${captcha}`, "GET");
  }

  /**
   * 获取用户歌单列表
   * @param uid 用户id
   * @returns 返回用户创建歌单
   */
  static async getUserPlaylist(uid: number) {
    return await request(`/user/playlist?uid=${uid}`, "GET");
  }

  static async getSongs(type?: number) {
    return await request(`/top/song?type=${type}`, "GET");
  }
}
