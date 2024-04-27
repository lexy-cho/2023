import { FILE_URL } from '@env';
import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BackHandler, Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import { ScrollView } from "react-native-gesture-handler";
import Sound from 'react-native-sound';
import { useMutation, useQuery } from 'react-query';
import { licenseApi, mainApi, settingApi } from '../apis';
import { BTN_PREV, IC_MIC_OFF } from '../assets/images';
import { sStyles, styles } from '../assets/styles';
import { Clock, PopupModal } from '../components';
import { useAppContext } from "../contexts";
import { formatTime } from '../utils/format';
// import PushNotification from "react-native-push-notification";
import { localNotificationService } from "../LocalNotificationService";

type HomeScreenProps = NativeStackScreenProps<ParamListBase, "Home">;
Sound.setCategory('Playback', true) //backGround에서 재생되도록

const CustomTimerScreen: React.FC = ({ navigation, route }: HomeScreenProps) => {
  const { userInfo, setUserInfo } = useAppContext();

  const timeSeq = route.params.timeSeq;
  const isSkip = route.params.isSkip;
  const historyType = 'C';

  const [time, setTime] = useState<number>(0);            // 타이머 시간
  const [extraTime, setExtraTime] = useState<number>(0);  // 추가 시간
  const [checkFirst, setCheckFirst] = useState<boolean>(false);    // 타이머 처음 실행 여부
  const [isRunning, setIsRunning] = useState<boolean>(false);      // 타이머 진행 여부
  const [isEndable, setIsEndable] = useState<boolean>(false);      // 타이머 종료 가능 여부
  const [isClose, setIsClose] = useState<boolean>(false);          // 타이머 종료 여부
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const currentHour = currentTime.getHours();             // 아날로그 시계(시)
  const currentMinute = currentTime.getMinutes();         // 아날로그 시계(분)
  const currentSecond = currentTime.getSeconds();         // 아날로그 시계(초)

  const intervalRef = useRef<number | null>(null);
  const historySeq = useRef<string>('');                  // 사용이력 seq
  const progressTime = useRef<number>(0);                 // 타이머 진행 시간
  const sound = useRef<Sound | null>(null);

  const getTimer = async () => {
    const params = { timeSeq: timeSeq };
    const response: any = await mainApi.getTimer(params);
    if (response.statusCode === 200) {
      return response.data.result;
    };
  };

  const postMutation = useMutation(licenseApi.postHistory, {
    onSuccess: ({ data }: any, variables, context) => {
      // console.log("success postMutation", data, variables, context);
      // setHistorySeq(data.historySeq);
      historySeq.current = data;
    },
  });

  // const putMutation = useMutation(mainApi.putUse, {
  //   onSuccess: ({ data }: any, variables, context) => {
  //     console.log("success putMutation", data, variables, context);
  //     // setHistorySeq(data.historySeq);
  //   },
  // });

  const settingMutation = useMutation(settingApi.putSetting, {
    onError: (error, variable, context) => {
      console.log("error", error, variable, context)
    },
    onSuccess: ({ data }: any, variables, context) => {
      // console.log("success", data, variables, context);
      setUserInfo({ ...userInfo, ...variables });
      setIsRunning(true);
    },
  });

  const { data, refetch, isLoading, isError, isFetching } = useQuery<any>('CustomTimer', getTimer, { enabled: !!timeSeq, cacheTime: 0 });

  // console.log("getTimer ===========>" ,timeSeq, isSkip, data, "isLoading", isLoading, "isFetching", isFetching);

  const startTimer = () => {
    if (sound.current?.isPlaying()) sound.current.stop(); // 음원이 재생 여부

    if (!checkFirst) {
      setCheckFirst(true);
      // postMutation.mutate({ itemSeq: timeSeq, historyType, progressTime: progressTime.current });
    }
    if (!isRunning) setIsRunning(true); // 타이머 실행 여부
  };

  const stopTimer = () => {
    if (isRunning) setIsRunning(false);
  };

  const endTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      setIsClose(true);
      saveHistory();
      // BackgroundTimer.clearInterval(intervalRef.current!);
    }
  };

  const setAudioFile = async () => {
    /**
     * TODO: 
     * 커스텀 타이머도 기본 음원이 있어야하는데 어떻게 처리할지
     * new Sound 생성시 url 보안적인 부분 어떻게 처리할지
     */
    const audioFile = new Sound(`${FILE_URL}brodcast/00c8c7cdc87d447a9b2f38a48ac6dd04.mp3`, '', error => {
      // const audioFile = new Sound(url, '', error => {
      if (error) {
        console.error('Error loading sound:', error);
      } else {
        sound.current = audioFile;
        playSound();
      }
    });
  };

  const playSound = useCallback(() => {
    if (sound.current) {
      // console.log("playSound=========>")
      sound.current.play((success) => {
        if (success) {
          console.log('Sound played successfully');
          if (!checkFirst) startTimer(); // 재생이 끝난경우 타이머 시작!
        } else {
          console.log('Sound playback failed');
        }
      });
    }
  }, [sound.current])

  const saveHistory = () => {
    //TODO: isClose도 useRef로 변경해야할수도있다.
    const progress = [{ proTestPeriode: "1", progressTime: progressTime.current }];
    if (!isClose) postMutation.mutate({ itemSeq: timeSeq, historyType, historySeq: historySeq.current ? historySeq.current : null, progress });
  }

  useEffect(() => {
    if (data && !isError) {
      const { timeTest, timeStart } = data;
      const startHour = Number(timeStart?.split(":")[0]);
      const startMinute = Number(timeStart?.split(":")[1]);
      const startSecond = 0;

      const initialTime = new Date();
      initialTime.setHours(startHour);
      initialTime.setMinutes(startMinute);
      initialTime.setSeconds(startSecond);

      setTime(timeTest);
      setCurrentTime(initialTime);
    }
  }, [data, isError]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = BackgroundTimer.setInterval(() => {
        if (!isClose) {
          setTime((prevTime: number) => (prevTime > 0 ? prevTime - 1 : 0));
          progressTime.current = progressTime.current + 1;
        } else {
          setExtraTime((prevTime: number) => (prevTime + 1));
        }
        const newTime = new Date(currentTime);
        newTime.setSeconds(newTime.getSeconds() + 1);
        setCurrentTime(newTime);
      }, 1000);
    } else {
      BackgroundTimer.clearInterval(intervalRef.current!);
      //clearInterval(intervalRef.current!);
    }
    return () => {
      BackgroundTimer.clearInterval(intervalRef.current!);
      // clearInterval(intervalRef.current!);
    };
  }, [isRunning, currentTime]);

  useEffect(() => {
    if (time == Number(data?.timeTest) / 2) setIsEndable(true);
    if (time <= 0 && isRunning) {
      saveHistory();
      setIsRunning(false);
      setIsClose(true);
      BackgroundTimer.clearInterval(intervalRef.current!);
      //clearInterval(intervalRef.current!);
      if (userInfo.timerFlag === 'Y') {
        setIsRunning(true);
      } else {
        toggleModal();
      }
      // 타이머 종료시 푸쉬알람
      // PushNotification.localNotification({ channelId: 'my-channel', title: '스이트', message: '타이머가 종료되었습니다.' });
      localNotificationService.showNotification(0, '스이트', '타이머가 종료되었습니다.', {}, { soundName: 'default', playSound: true });
    }
  }, [time]);

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('MainScreen');
      return true;
    }

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    if (!isSkip) setAudioFile(); //음원 재생
    return () => {
      // saveHistory();
      if (sound.current) sound.current.release();
      BackgroundTimer.clearInterval(intervalRef.current!);
      backHandler.remove();
      // clearInterval(intervalRef.current!);
    }
  }, []);

  /****************************************** timer 상태에 따른 Text, button  *****************************************/
  const TimerText = () => {
    let title = '';
    let content = '';

    if (checkFirst && !isClose) {
      title = '시험 진행 중입니다.';
      content = '제한시간 ½이후 시험 종료가 가능합니다.';
    } else if (!isRunning && isClose) {
      title = extraTime ? `시험 시간이 종료되었습니다. \n\n 경과 시간 : ${formatTime(extraTime, 'HH:mm:ss')}` : '시험 시간이 종료되었습니다.';
      content = '타이머 이용 이력은 더보기 메뉴를 이용해주세요.';
    } else if (isRunning && isClose) {
      title = `시험 시간이 종료되었습니다. \n\n 경과 시간 : ${formatTime(extraTime, 'HH:mm:ss')}`;
    } else {
      title = '타이머 시작 1분전 입니다.';
      content = '상황에 따라 버튼을 선택하여 타이머를\n조절할 수 있습니다.';
    }

    return (
      <View style={sStyles.timeInfoBack}>
        <Text style={sStyles.tIMain}>{title}</Text>
        <Text style={sStyles.tISub}>{content}</Text>
      </View>
    );
  };

  const TimerButton = () => {
    return (
      !isRunning ?
        !checkFirst ?
          <TouchableOpacity style={[sStyles.tBBasic, sStyles.tBBasicBg]} onPress={() => startTimer()}>
            <Text style={sStyles.tBWhite}>바로 시작</Text>
          </TouchableOpacity>
          : !isClose ?
            <TouchableOpacity style={[sStyles.tBBasic, sStyles.tBBasicBg]} onPress={() => startTimer()}>
              <Text style={sStyles.tBWhite}>재생</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={sStyles.tBGoMain} onPress={() => navigation.navigate('MainScreen')}>
              <Text style={sStyles.tBGoMainTxt}>메인으로</Text>
            </TouchableOpacity>
        : !isEndable ?
          <TouchableOpacity style={sStyles.tBBasic} onPress={() => stopTimer()}>
            <Text style={sStyles.tBBLue}>일시 정지</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity style={sStyles.tBBasic} onPress={() => endTimer()}>
            <Text style={sStyles.tBBLue}>시험종료</Text>
          </TouchableOpacity>
    )
  };
  /****************************************** timer 상태에 따른 Text, button  *****************************************/

  /** Modal useState */
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const toggleModal = () => {
    setModalIsVisible(!modalIsVisible);
  };

  return (
    // isFetching ? <Spinner visible={isFetching} textContent={'Loading...'} /> :
    !isFetching &&
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Pressable onPress={() => navigation.navigate('MainScreen')} style={styles.btnPrev}>
          <Image source={BTN_PREV} style={styles.icBtnPrev} />
        </Pressable>
        <Text style={styles.subTit}>{data.timeName}</Text>
      </View>
      <ScrollView style={styles.subScroll}>
        <View style={sStyles.digitalTimer}>
          <Text style={sStyles.digitalTimerTxt}>
            제한시간 <Text style={sStyles.dTLine}> | </Text> <Text style={sStyles.dTBlue}>{formatTime(data.timeTest, 'HH:mm:ss')}</Text>{"\n"}
            남은시간 <Text style={sStyles.dTLine}> | </Text> <Text style={sStyles.dTRed}>{formatTime(time, 'HH:mm:ss')}</Text>
          </Text>
          <View><Image source={IC_MIC_OFF} style={sStyles.ic_mic} /></View>
        </View>
        <Clock currentHour={currentHour} currentMinute={currentMinute} currentSecond={currentSecond} size={200} />
        <TimerText />
      </ScrollView>
      <View style={sStyles.timerBtn}>
        <TimerButton />
      </View>

      <PopupModal
        visible={modalIsVisible}
        title={"시험 시간이 \n 종료되었습니다. "}
        message={"계속해서 타이머를 \n 연장 하시겠습니까?"}
        subMessage={""}
        confirmTitle={"예"}
        cancelTitle={"아니오"}
        onCancel={() => {
          toggleModal();
        }}
        onConfirm={() => {
          settingMutation.mutate({ memSeq: userInfo.memSeq, timerFlag: 'Y' });
          toggleModal();
        }}
      />
    </View>
  );
};

export default CustomTimerScreen;
