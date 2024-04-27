import api from './api';

export default {
    getUses: (data: any) => {
        const params = { ...data };
        return api.get('/api/v1/setting/use-list', { params: params })
    },
    getPushs: (data: any) => {
        const params = { ...data };
        return api.get('/api/v1/setting/push-list', { params: params })
    },
    getNotices: (data: any) => {
        const params = { ...data };
        return api.get('/api/v1/setting/notice-list', { params: params })
    },
    deleteUse: (data: any) => {
        const params = { ...data };
        return api.delete("/api/v1/setting/use-list", { data: params });
    },
    getSetting: (data: any) => {
        const params = { ...data };
        return api.get('/api/v1/setting/setting-list', { params: params })
    },
    putSetting: (data: any) => {
        const params = { ...data };
        return api.put("/api/v1/setting/setting", params)
    },
};

