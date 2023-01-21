/*
 * @Descripttion: 我的 store管理
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-16 16:53:25
 * @LastEditTime: 2023-01-21 16:03:16
 */

import { makeAutoObservable, observable, toJS } from "mobx";
import { getStorage, setStorage } from "../../utils/storage";
import { usersRequest } from "../../apis";

// 登录返回值
type loginType = {
  phone: string;
  password: string;
};

// 默认空值
const DEFAULT_LOGIN_RESULT_DATA = {
  phone: "",
  captcha: "",
};

export class UsersStore {
  login_result: any = DEFAULT_LOGIN_RESULT_DATA;
  play_list_result: any;

  constructor() {
    makeAutoObservable(this, {
      login_result: observable,
    });
    // 持久化登录状态
    if (!this.login_result) {
      const profile: any = getStorage("userInfo");
      if (profile) this.login_result = JSON.parse(profile);
    }
  }

  // 登录
  async login(data: { phone: string; captcha: string }) {
    const loginRes: any = await usersRequest.loginByCaptcha(data);
    this.login_result = loginRes;
    return loginRes;
  }

  // 获取验证码
  async getCaptcha(phone: string) {
    return await usersRequest.getCaptchaNumber(phone);
  }

  // 获取校验验证码
  async getCheckCaptcha(phone: string, captcha: string) {
    return await usersRequest.checkCode(phone, captcha);
  }

  // 获取用户创建歌单
  async getUserPlaylist(uid: number) {
    const res: any = await usersRequest.getUserPlaylist(uid);
    console.log("res=====>>>", res);
    this.play_list_result = res;
    return res;
  }

  async getSong(type?: number) {
    const res = await usersRequest.getSongs(type);
    return res;
  }

  /**
   * 处理 toJS(this.login_result), 返回页面处理后的值
   * @returns login_result
   */
  get_login_result_state() {
    return toJS(this.login_result);
  }

  get_play_list_result_state() {
    console.log("hahahah=====>>>", this.play_list_result);
    return toJS(this.play_list_result);
  }
}
