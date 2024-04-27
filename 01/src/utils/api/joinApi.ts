// import { api } from './api_test';
import { api } from './api';

export default {
    joinCheck: async (data: any) => {
        // console.log(data)
        return await api.get(`/api/v1/join/check-member?memId=${data.memId}&memAuthType=${data.memAuthType}`);
    },
    join: async (data: any) => {
        // console.log(data)
        return await api.post('/api/v1/join/member', data);
    },
    upGrade: async (data: any) => {
        // console.log(data)
        return await api.put('/api/v1/login/upgrade', data);
    },
    getCertNo: async (data: any) => {
        // console.log(data)
        return await api.post('/api/v1/join/get-number', data);
    },
    duplication: async (data: any) => {
        const params = { ...data };
        const response = await api.get('/api/v1/join/duplication', { params: params });
        return response
    },
};
