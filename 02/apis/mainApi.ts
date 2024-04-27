import api from './api';

export default {
    getLicenses: (data: any) => {
        const params = { ...data };
        return api.get('/api/v1/main/license-list', { params: params })
    },
    deleteLicense: (data: any) => {
        const params = { ...data };
        return api.delete("/api/v1/main/license", { data: params });
    },
    getLicenseManys: (data: any) => {
        const params = { ...data };
        return api.get('/api/v1/main/license-many-list', { params: params })
    },
    getTimers: (data: any) => {
        const params = { ...data };
        return api.get('/api/v1/main/timer-list', { params: params })
    },
    getNotices: (data: any) => {
        const params = { ...data };
        return api.get('/api/v1/main/notice-list', { params: params })
    },
    getVersion: (data: any) => {
        const params = { ...data };
        return api.get('/api/v1/main/version', { params: params })
    },
    deleteTimer: (data: any) => {
        const params = { ...data };
        return api.delete("/api/v1/main/timer", { data: params });
    },
    postLicense: (data: any) => {
        return api.post('/api/v1/main/license', data)
    },
    getTimer: (data: any) => {
        const params = { ...data };
        return api.get('/api/v1/main/timer', { params: params })
    },
    getLicense: (data: any) => {
        const params = { ...data };
        return api.get('/api/v1/main/license', { params: params })
    },
    // postUse: (data: any) => {
    //     return api.post('/api/v1/main/use', data)
    // },
    // putUse: (data: any) => {
    //     const params = { ...data };
    //     return api.put("/api/v1/main/use", params)
    // },
    // getDownloadFile: (data: any) => {
    //     const params = { ...data };
    //     return api.get('/api/v1/common/download-system', { params: params })
    // },
};

