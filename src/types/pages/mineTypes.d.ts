/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-13 16:14:58
 * @LastEditTime: 2023-01-16 16:40:14
 */

declare namespace MineInstance {
  // Config interface

  interface listInterface {
    title: string;
    path?: string;
  }

  interface collectListInterface {
    name: string;
    type: string;
    createDate: string;
    is_collect: boolean;
  }
}
