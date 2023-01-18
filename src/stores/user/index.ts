/*
 * @Descripttion: 我的 store管理
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-16 16:53:25
 * @LastEditTime: 2023-01-18 16:54:43
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
    const loginRes: any = await usersRequest.loginByPassword(data);
    console.log("loginRes=====>>>", loginRes);
    this.login_result = loginRes;
    // setStorage("userInfo", JSON.stringify(loginRes.data));
  }

  async getSong(type?: number) {
    const res = await usersRequest.getSongs(type);
    console.log("song res=====>>>", res);
  }

  /**
   * 处理 toJS(this.login_result), 返回页面处理后的值
   * @returns login_result
   */
  get_login_result_state() {
    return toJS(this.login_result);
  }
}
