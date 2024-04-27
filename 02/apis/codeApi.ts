import api from './api';

export default {
    getCodeList: (data: any) => {
        const params = { ...data };
        return api.get('/api/v1/a-code/code-list', { params: params })
    },

    postCode: (data: any) => {
        return api.post('/api/v1/a-code/code', data)
    },

    getCodeDetail: (data: any) => {
        const params = { ...data };
        return api.get('/api/v1/a-code/code-detail', { params: params })
    },

    deleteCode: (data: any) => {
        const params = { ...data };
        return api.delete("/api/v1/a-code/code", { data: params });
    },

    putCode: (data: any) => {
        const params = { ...data };
        return api.put("/api/v1/a-code/code", params)
    },


};

