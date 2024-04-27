import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import React, { useEffect } from 'react';
import { Alert, AppState, BackHandler, Linking, Platform, Vibration } from 'react-native';
import mobileAds from 'react-native-google-mobile-ads';
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';
import { fcmService } from './FCMService';
import { localNotificationService } from './LocalNotificationService';
import { AppContextProvider } from './contexts';
import Navigation from './navigation';
import { PERMISSIONS, RESULTS, request } from "react-native-permissions";
import VersionCheck from 'react-native-version-check';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  onMessageReceived(remoteMessage);
});

// const theme = {
//   colors: {
//     text: '#aaaaa',
//     textLight: '#aaaaa',
//     textDark: '#aaaaa',
//     button: '#aaaa',
//     buttonLight: '#aaaa',
//     buttonDark: '#aaaa',
//   },
// };


const App: React.FC = () => {
  //google mobile 광고 SDK 초기화
  mobileAds()
    .initialize()
    .then(adapterStatuses => {
      // Initialization complete!
    });

  useEffect(() => {
    // const AppVersionCheck = async () => {

    //   console.log("첫진입 시작");
    //   //기기에 설치되 있는 버전
    //   let CurrentVersion = VersionCheck.getCurrentVersion();
    //   //앱의 최신버전
    //   let LatestVersion = await VersionCheck.getLatestVersion();
    //   console.log("VersionCheck", CurrentVersion, LatestVersion)
    //   //기기에 설치되있는 버전과 앱에 올려져있는 최신버전을 비교
    //   VersionCheck.needUpdate({
    //     currentVersion: CurrentVersion,
    //     latestVersion: LatestVersion,
    //   }).then((res: any) => {
    //     console.log("VersionCheck res=======>", res)
    //     if (res.isNeeded) {
    //       Alert.alert("필수 업데이트 사항이 있습니다.", "", [
    //         {
    //           text: "스토어이동",
    //           onPress: () => {
    //             if (Platform.OS == "android") {
    //               console.log("안드로이드 앱스토어 주소")
    //               // Linking.openURL(안드로이드 앱스토어 주소);
    //             } else {
    //               console.log("IOS 앱스토어 주소")
    //               // Linking.openURL(IOS 앱스토어 주소);
    //             }
    //           },
    //         },
    //       ]);
    //     }
    //   });
    // };
    
    const listener = AppState.addEventListener('change', (status) => {  
      //iOS 15 이상에서 추적 요청 팝업 띄우기
      if (Platform.OS === 'ios' && status === 'active') {
        request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY)
          .then((result) => console.warn(result))
          .catch((error) => console.warn(error));
      }
      // App Version Check
      // AppVersionCheck(); 
    });

    /**
     * Android 뒤로가기 물리버튼 처리
     * @returns 
     */
    const backAction = () => {
      Alert.alert('', '앱을 종료하시겠습니까?', [
        { text: '취소', onPress: () => null },
        { text: '확인', onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => {
      console.log('[App] unRegister');
      fcmService.unRegister();
      localNotificationService.unRegister();
      backHandler.remove();
      listener.remove();
    };
  }, []);

  return (
    // <ThemeProvider theme={theme}>
    <AppContextProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation />
      </SafeAreaView>
      <Toast position='bottom' visibilityTime={1000} />
    </AppContextProvider>
    // </ThemeProvider>
  );
};

const onMessageReceived = (message: FirebaseMessagingTypes.RemoteMessage) => {
  console.log('background message: ', message);
  Platform.OS === 'ios' && Vibration.vibrate([400]);
}

export default App;