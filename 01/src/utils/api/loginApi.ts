// import { api } from './api_test';
import { api } from './api';
import { removeAccessToken, removeRefreshToken, removeUserInfo } from 'utils/store';

export default {
  login: (data: any) => {
    return api.post("/api/v1/login/login", data);
  },
  logout: () => {
    removeAccessToken();
    removeRefreshToken();
    removeUserInfo();
    // window.location.reload();
  },
  findId: (data: any) => {
    // console.log(data)
    return api.get(`/api/v1/login/check-member?memId=${data.memId}&memAuthType=${data.memAuthType}`);
  },
  resetPw: (data: any) => {
    // console.log(data)
    return api.put('/api/v1/login/chg-pwd', data);
  },
  getCertNo: async (data: any) => {
    // console.log(data)
    return await api.post('/api/v1/login/get-number', data);
  }
};


