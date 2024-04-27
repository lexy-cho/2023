import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { storage } from "../utils/store";
import { navigate } from '../RootNavigation';

const AUTH = {
  ACCESS_TOKEN_KEY: 'access_token',
  REFRESH_TOKEN_KEY: 'refresh_token',
  USER_INFO: 'user_info',
  // PRIVATE_KEY: String(process.env.PRIVATE_KEY)
} as const

// Axios 인스턴스 생성
const instance = axios.create({
  baseURL: "http://192.168.0.101:4145"
  // baseURL: "http://192.168.0.83:4145" // API의 기본 URL을 설정합니다.
});

// Request 인터셉터 추가
instance.interceptors.request.use(
  async(config) => {
    // 여기에 필요한 인터셉트 작업을 수행합니다. 예를 들어, 헤더 설정 등.
    config.headers["Authorization"] = `Bearer ${await storage.getItem(AUTH.ACCESS_TOKEN_KEY)}`;
    return config;
  },
  (error) => {
    // 요청을 보내기 전에 에러가 발생한 경우 처리합니다.
    return Promise.reject(error);
  }
);

// Response 인터셉터 추가
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 여기에 필요한 인터셉트 작업을 수행합니다. 예를 들어, 응답 데이터 가공 등.
    return response;
  },
  (error: AxiosError) => {
    // 응답을 받은 후 에러가 발생한 경우 처리합니다.
    if (error.response) {
      // 서버로부터의 오류 응답 (예: 404, 500 등)
      // 에러 페이지로 이동하거나 다른 오류 처리 로직을 추가할 수 있습니다.
      // 여기서는 예를 들어 404 에러인 경우 '/error' 경로로 이동하도록 설정합니다.
      if (error.response.status === 404) {
        // navigation.navigate('Error');
      }else if (error.response.status === 401) {
        // navigation.navigate('Error');
        navigate('Error');
      }

      return Promise.reject(error);
    } else if (error.request) {
      // 요청이 전송되지 않은 경우
      // 네트워크 오류 등에 대한 처리
      return Promise.reject(error);
    } else {
      // 요청 설정을 구성하는 동안 오류가 발생한 경우
      return Promise.reject(error);
    }

  }
);

// API 요청 메서드 정의
const api = {
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return instance.get(url, config)
      .then((response: AxiosResponse<T>) => {
        return response.data;  
      })
      .catch((error: any) => {
        throw error;
      });
  },
  post: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    return instance.post(url, data, config)
      .then((response: AxiosResponse<T>) => {
        return response.data;
      })
      .catch((error: any) => {
        throw error;
      });
  },
  put: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    return instance.put(url, data, config)
      .then((response: AxiosResponse<T>) => {
        return response.data;
      })
      .catch((error: any) => {
        throw error;
      });
  },
  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return instance.delete(url, config)
      .then((response: AxiosResponse<T>) => {
        return response.data;
      })
      .catch((error: any) => {
        throw error;
      });
  },
};

export default api;
