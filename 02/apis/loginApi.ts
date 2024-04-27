import api from './api';

export default {
    loginDeviceKey: (data: any) => {
        return api.post('/api/v1/login/login-device-key', data)
    },
};

