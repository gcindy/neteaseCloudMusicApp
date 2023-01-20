/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-20 07:34:46
 * @LastEditTime: 2023-01-20 17:43:57
 */
import { Toast } from "@ant-design/react-native";
import { Method } from "axios";
import { DOMAIN_URL } from "./domain";
import { rootStore } from "../stores";
import service from "./request";

export const request = (url: string, method: Method, data?: object, options?: GlobalInstance.showOptions) => {
  const requestUrl = method == "POST" ? `${DOMAIN_URL}${url}&timestamp=${new Date().getTime()}` : `${DOMAIN_URL}${url}`;

  return new Promise(async (resolve, reject) => {
    service({
      url: requestUrl,
      method,
    })
      .then(response => {
        if (response.data.code === 200) {
          rootStore.loadingInstance.set_loading_code(response.status);
          resolve(response);
        }
      })
      .catch((err: any) => {
        Toast.fail(err.data.message);

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
