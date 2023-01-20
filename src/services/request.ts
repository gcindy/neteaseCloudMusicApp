/*
 * @Descripttion:
 * @Author: 苏小妍
 * @LastEditors: 苏小妍
 * @Date: 2023-01-19 22:19:28
 * @LastEditTime: 2023-01-20 19:53:05
 */
import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import { useStore } from "../hooks";
import { Toast } from "@ant-design/react-native";
import { DOMAIN_URL } from "./domain";
import { rootStore } from "@/stores";

interface AxiosRequestConfigOpt extends AxiosRequestConfig {
  options?: GlobalInstance.showOptions;
}

interface AxiosResponseOpt extends AxiosResponse {
  options?: GlobalInstance.showOptions;
}

const { usersInstance } = useStore();

// 设置默认属性
const service = axios.create({
  baseURL: DOMAIN_URL,
  timeout: 13 * 1000, // 超时时间
  headers: {
    "Content-Type": "application/json",
    // Cookie: usersInstance.login_result.token ? `${usersInstance.login_result.token}` : "",
    // Cookie:
    //   "oauth_token=8bca2670-3ff6-4d19-91f1-7688d11121f4; login_type=oa; allocation_token=8bca2670-3ff6-4d19-91f1-7688d11121f4; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22gzzhengjing%22%2C%22%24device_id%22%3A%2218456ee343990d-0e5c7e293ab75a-18525635-1764000-18456ee343ae4f%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%2C%22first_id%22%3A%2218456ee343990d-0e5c7e293ab75a-18525635-1764000-18456ee343ae4f%22%7D",
  },
});

// 携带cookies
service.defaults.withCredentials = true;

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfigOpt) => {
    // const options = config.headers as any;
    // console.log("axios config", options.common.options.showLoading);
    // if (options.common.options.showLoading) {
    //   // rootStore.loadingInstance.set_loading();
    // }
    return config;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  },
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponseOpt) => {
    console.log("axios response", response);
    // 对相应错误拦截
    if (response.status == 200) {
      return response;
    } else {
      rootStore.loadingInstance.showLoading(false);
      return response.data;
    }
  },
  (err: any) => {
    console.log("err", err);
    if (err.code == "ERR_NETWORK") {
      console.log("ERR_NETWORK==>err", err);
      Toast.fail("网络错误");
      rootStore.loadingInstance.set_loading_code(err.code);
      rootStore.loadingInstance.showLoading(false);
    }
    return Promise.reject(err.response);
  },
);

export default service;
