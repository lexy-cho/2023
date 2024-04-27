import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { Alert, Platform } from 'react-native';
import { requestNotifications } from "react-native-permissions";

class FCMService {
    register = (onRegister: (token: any, type: string) => void, onNotification: (notify: any) => void, onOpenNotification: (notify: any) => void) => {
        this.checkPermission(onRegister);
        this.createNotificationListeners(
            onRegister,
            onNotification,
            onOpenNotification,
        );
    };

    registerAppWithFCM = async () => {
        if (Platform.OS === 'ios') {
            // await messaging().registerDeviceForRemoteMessages();
            await messaging().setAutoInitEnabled(true);
        } else if (Platform.OS == "android") {
            const permission = await requestNotifications(["alert", "sound"]);
            return permission.status == "granted";
        }
    };

    checkPermission = (onRegister: (token: any, type: string) => void) => {
        messaging()
            .hasPermission()
            .then((enabled) => {
                if (enabled) {
                    //User has permission
                    this.getToken(onRegister);
                } else {
                    //User doesn't have permission
                    this.requestPermission(onRegister);
                }
            })
            .catch((error) => {
                console.log('[FCMService] Permission rejected ', error);
            });
    };

    getToken = (onRegister: { (token: any, type: string): void; }) => {
        messaging()
            .getToken()
            .then((fcmToken) => {
                if (fcmToken) {
                    onRegister(fcmToken, 'get');
                } else {
                    console.log('[FCMService] User does not have a device token');
                }
            })
            .catch((error) => {
                console.log('[FCMService] getToken rejected', error);
            });
    };

    requestPermission = (onRegister: { (token: any, type: string): void; }) => {
        messaging()
            .requestPermission()
            .then(() => {
                this.getToken(onRegister);
            })
            .catch((error) => {
                console.log('[FCMService] Request Permission rejected', error);
            });
    };

    deleteToken = () => {
        console.log('[FCMService] deleteToken');
        messaging()
            .deleteToken()
            .catch((error) => {
                console.log('[FCMService] Delete token error', error);
            });
    };

    createNotificationListeners = (
        onRegister: { (token: any, type: string): void; },
        onNotification: { (notify: any): void; },
        onOpenNotification: { (notify: any): void; },
    ) => {
        //실행중이지만 현재화면은 다른 앱이 실행중이거나 아무것도 실행하지않을때
        messaging().onNotificationOpenedApp((remoteMessage) => {
            console.log('[FCMService] onNotificationOpenApp Notification caused app to open from background', remoteMessage);
            if (remoteMessage) {
                const notification = remoteMessage.notification;
                onOpenNotification(notification);
                //this.removeDeliveredNotification(Notification.NotificationId)
            } else {
                console.log('background notification error', error);
            }
            // Alert.alert(remoteMessage.body);
        });

        //Check whether an initial notification is available
        //앱이 실행중이 아닐때
        messaging()
            .getInitialNotification()
            .then((remoteMessage) => {
                console.log('[FCMService] getInitialNotification casued app to open from quit state : fcmremoteMessage :', remoteMessage,);
                if (remoteMessage) {
                    const notification = remoteMessage.notification;
                    onOpenNotification(notification);
                    //this.removeDeliveredNotification(notification.notificationId)
                }else {
                    console.log('quit state notification error : ', error);
                }
            }).catch((error) => {
                console.log('quit state notification error : ', error);
            });

        //실행중이고 현재 화면일때
        this.messageListener = messaging().onMessage(async (remoteMessage) => {
            console.log('[FCMService] A new FCM message arrived', remoteMessage);
            if (remoteMessage) {
                let notification = null;
                // if (Platform.OS === 'ios') {
                //     notification = remoteMessage.data.notification;
                // } else {
                //     notification = remoteMessage.notification;
                // }
                notification = remoteMessage.notification;
                onNotification(notification);
            }
        });

        //Triggerd when have new token
        messaging().onTokenRefresh((fcmToken) => {
            console.log('[FCMService] New token refresh :', fcmToken);
            onRegister(fcmToken, 'refresh');
        });
    };

    unRegister = () => {
        this.messageListener();
    };
}

export const fcmService = new FCMService();