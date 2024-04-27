import messaging from '@react-native-firebase/messaging';
import React, { createContext, useContext, useEffect, useState } from 'react';
import {
    getSystemName,
    getUniqueId
} from 'react-native-device-info';
import { QueryClient, QueryClientProvider } from 'react-query';
import { loginApi } from './apis';
import { UserInfo } from './dto';
import checkFirstLaunch from './utils/checkFirstLaunch';
import { storage } from './utils/store';
import { fcmService } from './FCMService';
import { localNotificationService } from './LocalNotificationService';
import SplashScreen from 'react-native-splash-screen';

interface AppContextProps {
    children:any
}

interface AppContextType {
    userInfo: UserInfo;
    setUserInfo: (userInfo: UserInfo) => void;
    // 다른 상태나 함수들도 추가할 수 있음
}

const NewContext = createContext<AppContextType | undefined>(undefined);
// const queryClient = new QueryClient();

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            notifyOnChangeProps: 'tracked',
        },
    },
})

export const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {
    const AUTH = {
        ACCESS_TOKEN_KEY: 'access_token',
        REFRESH_TOKEN_KEY: 'refresh_token',
        USER_INFO: 'user_info',
        // PRIVATE_KEY: String(process.env.PRIVATE_KEY)
    } as const

    const [userInfo, setUserInfo] = useState<UserInfo>({
        memSeq: '',
        memUuid: '',
        memId: '',
        memName: '',
        memOs: '',
        memEmail: '',
        broadcastFlag: '',
        memPushFlag: '',
        premiumFlag: '',
        pushFlag: '',
        timerFlag: '',
        fcmToken: '',
    });

    const contextValue: AppContextType = { userInfo, setUserInfo };

    useEffect(() => {
        setTimeout(() => SplashScreen.hide(), 2000);
        
        fcmService.registerAppWithFCM();
        fcmService.register(onRegister, onNotification, onOpenNotification);
        localNotificationService.configure(onOpenNotification);

        function onRegister(token: any, type:string) {
            console.log('[App] onRegister : token :', token, "type : ", type);
            if(type === 'get') _checkFirstLaunch(token);
        }

        function onNotification(notify: any) {
            console.log('[App] onNotification : notify :', notify);
            const options = {
                soundName: 'default',
                playSound: true,
            };
            localNotificationService.showNotification(
                0,
                notify.title,
                notify.body,
                notify,
                options,
            );
        }

        function onOpenNotification(notify: any) {
            console.log('[App] onOpenNotification : notify :', notify);
            // Alert.alert('Open Notification : notify.body :' + notify.body);
        }

        /**
         * TODO:
         * 첫번째 실행이면 _systemName, _uniqueId 가지고 T_MEMBER 테이블에 INSERT 해야한다.
         * 지웠다가 다시 실행시 _uniqueId 중복될수 있으므로 DELETE > INSERT
         * 회원가입이 생긴 이후 다시 고려해야함
         */
        // async function _checkFirstLaunch() {
            async function _checkFirstLaunch(fcmToken: string) {
            const firstLaunch = await checkFirstLaunch();

            //TODO: 23.10.5. 추가 테스트
            // const fcmToken = await messaging().getToken();
            const memOs = getSystemName() === 'iOS' ? 'I' : 'A';
            const memDeviceKey = getUniqueId();

            const params = {
                firstLaunch: firstLaunch,
                memOs: memOs,
                memDeviceKey: memDeviceKey,
                fcmToken: fcmToken
            }

            console.log("_checkFirstLaunch========>", params);

            const response: any = await loginApi.loginDeviceKey(params);
            if (response.statusCode === 200) {
                storage.setItem(AUTH.ACCESS_TOKEN_KEY, response.data.token);
                storage.setItem(AUTH.USER_INFO, response.data.userInfo);
                setUserInfo(response.data.userInfo);
            }
        }
    }, []);

    return (
        //TODO: userInfo가 있는지 없는지 여부를 어떻게 판단할지 생각해야함
        userInfo.memSeq ?
            <QueryClientProvider client={queryClient}>
                <NewContext.Provider value={contextValue}>
                    {children}
                </NewContext.Provider>
            </QueryClientProvider>
            : null
    )
};

export const useAppContext = () => {
    const context = useContext(NewContext);
    if (!context) {
        throw new Error('useAppContext must be used within a NewContextProvider');
    }
    return context;
};
