/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-17 17:29:15
 * @LastEditTime: 2023-01-18 11:50:03
 */
import axios, { AxiosResponse, Method } from "axios";
import { DOMAIN_URL } from "./domain";
import { rootStore } from "@/stores";
import { Toast } from "@ant-design/react-native";

type requestOptions = {
  showloading?: boolean;
};

const defaultRequestOption: { showLoading: boolean } = {
  showLoading: false,
};

export function request(url: string, method: Method, data?: object, options?: requestOptions): Promise<any> {
  const { showloading } = { ...defaultRequestOption, ...options };
  return new Promise((resolve, reject) => {
    // console.log("url=====>>>>>", `${DOMAIN_URL}${url}`);

    let body = method == "GET" ? "params" : "data";

    // 开启loading
    if (showloading) {
      rootStore.loadingInstance.showLoading(true);
    }

    console.log("data=====>>>", data);

    let requestUrl = method == "POST" ? `${DOMAIN_URL}${url}&timestamp=${new Date().getTime()}` : `${DOMAIN_URL}${url}`;
    console.log("requestUrl=====>>>", method, requestUrl);

    axios({
      url: requestUrl,
      method,
      [body]: data == null ? "" : data,
      withCredentials: true,
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        // Cookie:
        //   "oauth_token=a73444ac-f4d3-4a6d-9bae-ac610f966fdc; login_type=oa; allocation_token=a73444ac-f4d3-4a6d-9bae-ac610f966fdc; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22gzzhengjing%22%2C%22%24device_id%22%3A%2218456e8076794-02f652ba58a9d1-18525635-1764000-18456e80768a3d%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%2C%22first_id%22%3A%2218456e8076794-02f652ba58a9d1-18525635-1764000-18456e80768a3d%22%7D",
      },
    })
      .then((response: AxiosResponse) => {
        console.log("response=====>>>", response.data);
        if (response.status === 200) {
          rootStore.loadingInstance.set_loading_code(response.status);
          if (response.data.code === 200) {
            // 系统异常
            rootStore.loadingInstance.set_loading_code(response.status);
            resolve(response.data);
          } else if (response.data.code) {
            rootStore.loadingInstance.set_loading_code(response.data.code);
            Toast.info(response.data.msg);
            // resolve(response.data);
          }
        }
        rootStore.loadingInstance.showLoading(false);
      })
      .catch((err: any) => {
        console.log("err=====>>>", err);
        // 网络错误
        if (err.code == "ERR_NETWORK") {
          console.log("err", err);
          rootStore.loadingInstance.set_loading_code(err.code);
          rootStore.loadingInstance.showLoading(false);
          reject(err);
        }
      });
  });
}
