/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-13 16:14:58
 * @LastEditTime: 2023-01-21 11:29:16
 */

declare namespace MineInstance {
  interface userInfoInterface {
    accountStatus: number;
    authStatus: number;
    authority: number;
    avatarDetail: null;
    avatarImgId: number;
    avatarImgIdStr: string;
    avatarImgId_str: string;
    avatarUrl: string;
    backgroundImgId: number;
    backgroundImgIdStr: string;
    backgroundUrl: string;
    birthday: number;
    city: number;
    defaultAvatar: boolean;
    description: string;
    detailDescription: string;
    djStatus: number;
    eventCount: number;
    expertTags: null;
    experts: object | {};
    followed: boolean;
    followeds: number;
    follows: number;
    gender: number;
    mutual: boolean;
    nickname: string;
    playlistBeSubscribedCount: number;
    playlistCount: number;
    province: number;
    remarkName: null;
    signature: string;
    userId: number;
    userType: number;
    vipType: number;
  }
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
