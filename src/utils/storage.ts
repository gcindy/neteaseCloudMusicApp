/*
 * @Descripttion: 缓存管理
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-13 23:11:59
 * @LastEditTime: 2023-01-18 09:04:34
 */

import AsyncStorage from "@react-native-async-storage/async-storage";

export const setStorage = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (err) {
    throw err;
  }
};

export const getStorage = async (key: string) => {
  try {
    const storage = (await AsyncStorage.getItem(key)) as string;
    return storage;
  } catch (err) {
    throw err;
  }
};

export const removeAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (err) {
    throw err;
  }
};

export const deleteStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {
    throw err;
  }
};
