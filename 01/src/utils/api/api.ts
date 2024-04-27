import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getAccessToken } from "utils/store";
import loginApi from "./loginApi"
import { useEffect } from "react";

// Axios 인스턴스 생성
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,// API의 기본 URL을 설정합니다.
  // baseURL: "http://192.168.0.127:4166", //"http://192.168.0.83:4166",
});

// Request 인터셉터 추가
instance.interceptors.request.use(
  (config) => {
    // 여기에 필요한 인터셉트 작업을 수행합니다. 예를 들어, 헤더 설정 등.
    config.headers["Authorization"] = `Bearer ${getAccessToken()}`;
    // config.headers['Content-Type'] = `application/json`;
    // config.headers['Access-Control-Allow-Origin'] = '*';
    // config.headers["Refresh-Token"] = `Bearer ${getAccessToken()}`;
    return config;
  },
  (error) => {
    // 요청을 보내기 전에 에러가 발생한 경우 처리합니다.
    console.log("axios request interceptors =======>", error);
    return Promise.reject(error);
  }
);

// Response 인터셉터 추가
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 여기에 필요한 인터셉트 작업을 수행합니다. 예를 들어, 응답 데이터 가공 등.
    return response;
  },
  (error) => {
    // 응답을 받은 후 에러가 발생한 경우 처리합니다.
    // console.log("axios response interceptors =======>", error);
    const originalConfig = error.config;
    if (error.response) {
      // console.log("error", error.response);
      // try {
      //   // 기존에 쿠키에 저장된 refresh token을 가져옴
      //   const refreshToken = await getCookie("refresh_token");
      //   axios.defaults.headers["Refresh-Token"] = refreshToken;
      //   // 토큰을 다시 발급 받는 api 호출 함수
      //   refreshAccessToken();
      // } catch (err) {
      if (error.response.data.statusCode === 401) {  //권한없음
        error.response.statusText = "Unauthorized";
        error.response.status = 401;
        loginApi.logout();
      } else if (error.response.data.statusCode === 405) {  //잘못된 접근
        error.response.statusText = "Method Not Allowed";
        error.response.status = 405;
        loginApi.logout();
      }
      return Promise.reject(error.response.data);
    }else {
      //Network Error
      if(error.code === 'ERR_NETWORK') {
        window.location.href = '/error';
      }
    }
    return Promise.reject(error);
    // return Promise.reject(error.response.data);
  }
);

// let loading = false;
// const setLoading = (value: boolean) => {
//   loading = value;
// };

// 토큰을 다시 발급 받는 api 호출 함수
// const refreshAccessToken = async () => {
// const response = await axios.post("http://localhost:8080/member/reissue");
// // response를 받고 header부분에 token을 받아서 쿠키에 담기
// const access_token = response.headers["authorization"];
// setCookie("access_token", access_token);
// // 화면에 바로 반영이 안돼서 강제적으로 reload 시킴
// window.location.reload();
// };

// API 요청 메서드 정의
const api = {
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return instance
      .get(url, config)
      .then((response: AxiosResponse<T>) => {
        return response.data;
      })
      .catch((error: any) => {
        throw error;
      });
  },
  post: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    return instance
      .post(url, data, config)
      .then((response: AxiosResponse<T>) => {
        return response.data;
      })
      .catch((error: any) => {
        throw error;
      });
  },
  put: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    return instance
      .put(url, data, config)
      .then((response: AxiosResponse<T>) => {
        return response.data;
      })
      .catch((error: any) => {
        throw error;
      });
  },
  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return instance
      .delete(url, config)
      .then((response: AxiosResponse<T>) => {
        return response.data;
      })
      .catch((error: any) => {
        throw error;
      });
  },
};

export { api };