/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-20 07:34:46
 * @LastEditTime: 2023-01-21 16:03:11
 */
import { Toast } from "@ant-design/react-native";
import { Method } from "axios";
import { DOMAIN_URL } from "./domain";
import { rootStore } from "../stores";
import service from "./request";

export const request = (url: string, method: Method, data?: object) => {
  const requestUrl = method == "POST" ? `${DOMAIN_URL}${url}&timestamp=${new Date().getTime()}` : `${DOMAIN_URL}${url}`;

  const body = method == "GET" ? "params" : "data";

  console.log("url=====>>>", requestUrl, body);

  return new Promise(async (resolve, reject) => {
    service({
      url: requestUrl,
      method,
      [body]: data == null ? "" : data,
    })
      .then(response => {
        console.log("response=====>>>", response.data, response.data.message);
        // rootStore.loadingInstance.set_loading_code(response.status);
        const code = response.data.code;
        if (code === 200) {
          resolve(response.data);
        } else {
          Toast.fail(`业务错误信息:${response.data.message}`);
          reject(response.data);
        }
      })
      .catch((err: any) => {
        console.log("err=====>>>", err.data);
        Toast.fail(`服务器错误信息：${err.data.message}`);
        // 网络错误
        if (err.code == "ERR_NETWORK") {
          console.log("ERR_NETWORK==>err", err);
          rootStore.loadingInstance.set_loading_code(err.code);
          rootStore.loadingInstance.showLoading(false);
          reject(err);
        }
      });
  });
};
