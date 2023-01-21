/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-13 16:14:58
 * @LastEditTime: 2023-01-21 16:20:45
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

  interface playListInterface {
    code: number;
    more: boolean;
    playlist: Array<playlistType>;
  }

  type playlistType = {
    adType: number;
    anonimous: boolean;
    artists: null;
    backgroundCoverId: number;
    backgroundCoverUrl: null;
    cloudTrackCount: number;
    commentThreadId: string;
    copied: boolean;
    coverImgId: number;
    coverImgId_str: string;
    coverImgUrl: string;
    createTime: number;
    creator: {
      defaultAvatar: boolean;
      province: number;
      authStatus: number;
      followed: boolean;
      avatarUrl: string;
      accountStatus: number;
      gender: number;
      city: number;
      birthday: number;
      userId: number;
      userType: number;
      nickname: string;
      signature: string;
      description: string;
      detailDescription: string;
      avatarImgId: number;
      backgroundImgId: number;
      backgroundUrl: string;
      authority: number;
      mutual: boolean;
      expertTags: null;
      experts: null;
      djStatus: number;
      vipType: number;
      remarkName: null;
      authenticationTypes: number;
      avatarDetail: null;
      avatarImgIdStr: string;
      backgroundImgIdStr: string;
      anchor: true;
      avatarImgId_str: string;
    };
    description: null;
    englishTitle: null;
    highQuality: boolean;
    id: number;
    name: string;
    newImported: boolean;
    opRecommend: boolean;
    ordered: boolean;
    playCount: number;
    privacy: number;
    recommendInfo: null;
    shareStatus: null;
    sharedUsers: null;
    specialType: number;
    status: number;
    subscribed: boolean;
    subscribedCount: number;
    subscribers: Array<any> | [];
    tags: Array<any> | [];
    titleImage: number;
    titleImageUrl: null;
    totalDuration: number;
    trackCount: number;
    trackNumberUpdateTime: number;
    trackUpdateTime: number;
    tracks: null;
    updateFrequency: null;
    updateTime: number;
    userId: number;
  };
}
