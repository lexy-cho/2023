import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import { useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from 'utils/store';
import loginApi from './loginApi';

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

interface AxiosInterceptorProps {
  children: any;
}

const AxiosInterceptor: React.FC<AxiosInterceptorProps> = ({ children }) => {
  console.log("AxiosInterceptor============>");
  const navigate = useNavigate();

  useEffect(() => {
    // const reqInterceptor = (config: InternalAxiosRequestConfig) => {
      
    //   // HTTP 요청에 필요한 설정을 추가할 수 있습니다.
    //   config.headers["Authorization"] = `Bearer ${getAccessToken()}`;
    //   return config;
    // };

    const resInterceptor = (response: AxiosResponse) => {
      return response;
    };

    // const errInterceptor = (error: AxiosError) => {
    const errInterceptor = (error: any) => {
      // console.log(error.response);
      if (error.response ) {
        // console.log("error", error.response);
        // try {
        //   // 기존에 쿠키에 저장된 refresh token을 가져옴
        //   const refreshToken = await getCookie("refresh_token");
        //   axios.defaults.headers["Refresh-Token"] = refreshToken;
        //   // 토큰을 다시 발급 받는 api 호출 함수
        //   refreshAccessToken();
        // } catch (err) {
        if(error.response.data.statusCode === 401) {  //권한없음
          error.response.statusText = "Unauthorized";
          error.response.status = 401;
          loginApi.logout();
          navigate('/');
        }else if(error.response.data.statusCode === 405) {  //잘못된 접근
          error.response.statusText = "Method Not Allowed"; 
          error.response.status = 405;
          loginApi.logout();
          navigate('/');
        }else if(error.response.data.statusCode === 406) {  //신고된 회원,활동
          navigate(`/accuse/${error.response.data.error.repType}`, {replace:true});
          return
        }
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error);
    };

    // const requestInterceptor = instance.interceptors.request.use(reqInterceptor);
    const responseInterceptor = instance.interceptors.response.use(resInterceptor, errInterceptor);

    return () => {
      // instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
    
  }, [navigate]);

  return children;
};

// const api = {
//   get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
//     return instance
//       .get(url, config)
//       .then((response: AxiosResponse<T>) => {
//         return response.data;
//       })
//       .catch((error: any) => {
//         throw error;
//       });
//   },
//   post: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
//     return instance
//       .post(url, data, config)
//       .then((response: AxiosResponse<T>) => {
//         return response.data;
//       })
//       .catch((error: any) => {
//         throw error;
//       });
//   },
//   put: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
//     return instance
//       .put(url, data, config)
//       .then((response: AxiosResponse<T>) => {
//         return response.data;
//       })
//       .catch((error: any) => {
//         throw error;
//       });
//   },
//   delete: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
//     return instance
//       .delete(url, config)
//       .then((response: AxiosResponse<T>) => {
//         return response.data;
//       })
//       .catch((error: any) => {
//         throw error;
//       });
//   },
// };

// export { api };

export default instance;
export { AxiosInterceptor };
