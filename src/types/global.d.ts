/*
 * @Descripttion: 定义全局的 interface
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-17 16:40:57
 * @LastEditTime: 2023-01-21 12:37:50
 */

declare namespace GlobalInstance {
  // Config interface
  interface ConfigType {
    UIWidth: number;
  }
  // 接口返回值类型定义
  interface responseType<T = any> {
    code: number;
    message?: string;
    data: T | null | boolean;
  }
  //
  interface showOptions {
    showMessage?: boolean;
    showLoading?: boolean;
    throwErr?: boolean;
  }
}
