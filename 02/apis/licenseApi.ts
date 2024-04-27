import api from './api';

export default {
    getLicenses: (data: any) => {
        const params = { ...data };
        return api.get('/api/v1/license/license-list', { params: params })
    },
    getRecommends: (data: any) => {
        const params = { ...data };
        return api.get('/api/v1/license/recommend-list', { params: params })
    },
    getLicenseCalendars: (data: any) => {
        const params = { ...data };
        return api.get('/api/v1/license/license-calendar-list', { params: params })
    },
    postTimer: (data: any) => {
        return api.post('/api/v1/license/time', data)
    },
    postHistory: (data: any) => {
        return api.post('/api/v1/license/history', data)
    },
    // putUse: (data: any) => {
    //     const params = { ...data };
    //     return api.put("/api/v1/main/use", params)
    // },
};  

