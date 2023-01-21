/*
 * @Descripttion: 登录api
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-17 17:34:35
 * @LastEditTime: 2023-01-20 21:08:53
 */
import { request } from "../../services";

export default class LoginApi {
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

  static async getSongs(type?: number) {
    console.log("getSongs=====>>>type", type);
    return await request(`/top/song?type=${type}`, "GET");
  }
}
