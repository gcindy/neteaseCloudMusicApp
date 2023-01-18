/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-16 16:53:25
 * @LastEditTime: 2023-01-16 17:03:03
 */

import { makeObservable, observable, toJS } from "mobx";

export class LoadingStore {
  loading: boolean = false;

  /**
   * errCode: 500 系统异常
   */
  loading_code: number = 200;

  constructor() {
    makeObservable(this, {
      loading: observable,
      loading_code: observable,
    });
  }

  showLoading(bool: boolean) {
    this.loading = bool;
  }

  // 设置code
  set_loading_code(code: number) {
    this.loading_code = code;
  }

  get_loading_state() {
    return toJS(this.loading);
  }

  get_loading_code_state() {
    return toJS(this.loading_code);
  }
}
