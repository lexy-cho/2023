import { FILE_URL } from '@env';
import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BackHandler, Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import { ScrollView } from 'react-native-gesture-handler';
import Sound from 'react-native-sound';
import { useMutation, useQuery } from 'react-query';
import { licenseApi, mainApi } from '../apis';
import { BTN_PREV } from '../assets/images';
import { sStyles, styles } from '../assets/styles';
import { Clock, PopupModal, TimerTop } from '../components';
import { formatTime } from '../utils/format';
// import PushNotification from "react-native-push-notification";
import { localNotificationService } from "../LocalNotificationService";

type HomeScreenProps = NativeStackScreenProps<ParamListBase, "Home">;
Sound.setCategory('Playback', true) //backGround에서 재생되도록

const LicenseTimerScreen: React.FC = ({ navigation, route }: HomeScreenProps) => {

  const licenseSeq = route.params.licenseSeq;
  const testSeq = route.params.testSeq;
  // const isSkip = route.params.isSkip;
  const [isSkip, setIsSkip] = useState<boolean>(route.params.isSkip);
  const historyType = 'L';

  /** 타이머 재생관련 useState */
  const [checkFirst, setCheckFirst] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isEndable, setIsEndable] = useState<boolean>(false);
  const [isClose, setIsClose] = useState<boolean>(false);
  const [isRest, setIsRest] = useState<boolean>(false);
  const [isLunch, setIsLunch] = useState<boolean>(false);

  const [isReset, setIsReset] = useState<boolean>(false);

  const [periode, setPeriode] = useState<number>(1);
  const [broadcastFlag, setBroadcastFlag] = useState<string>("");

  /** useRef */
  const intervalRef = useRef<number | null>(null);
  const historySeq = useRef<string>('');
  const progressTime = useRef<number>(0);
  const sound = useRef<Sound | null>(null);

  /** 시간관련 useState */
  const [currentTime, setCurrentTime] = useState<Date>(() => {
    const initialTime = new Date();
    initialTime.setHours(9);
    initialTime.setMinutes(0);
    initialTime.setSeconds(0);
    return initialTime;
  });

  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentSecond = currentTime.getSeconds();

  const [lTime, setLTime] = useState<number>(0);
  const [rTime, setRTime] = useState<number>(0);
  const [extraTime, setExtraTime] = useState<number>(0); //초 단위

  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  const getLicense = async () => {
    const params = { licenseSeq: licenseSeq };
    const response: any = await mainApi.getLicense(params);
    if (response.statusCode === 200) return response.data;
  }

  const postMutation = useMutation(licenseApi.postHistory, {
    onSuccess: ({ data }: any, variables, context) => {
      // console.log("success postMutation", data, variables, context);
      // setHistorySeq(data.historySeq);
      // historySeq.current = data.historySeq;
      historySeq.current = data;
    },
  });

  const saveHistory = () => {
    //TODO: 교시가 있는 자격증은 history insert, update를 어떻게 해야할지
    // if (historySeq.current) putMutation.mutate({ historySeq: historySeq.current, progressTime: progressTime.current });
    // console.log("saveHistory===========>", "isClose", isClose, "historyType", historyType, "historySeq", historySeq.current, "periode", periode, "progressTime", progressTime.current)
    const progress = [{ proTestPeriode: periode, progressTime: progressTime.current }];
    if (!isClose) postMutation.mutate({ historyType, itemSeq: testSeq, historySeq: historySeq.current ? historySeq.current : null, progress });
  }

  // const putMutation = useMutation(mainApi.putUse, {
  //   onSuccess: ({ data }: any, variables, context) => {
  //     console.log("success putMutation", data, variables, context);
  //     // setHistorySeq(data.historySeq);
  //   },
  // });

  const { data, refetch, isLoading, isError, isFetching } = useQuery<any>('LicenseTimer', getLicense, { enabled: !!licenseSeq, cacheTime: 0 });
  const licenseInfo = data?.licenseInfo;
  const licenseBroadcastList = data?.licenseBroadcastList;
  const licenseTimeList = data?.licenseTimeList;

  const toggleModal = () => {
    setModalIsVisible(!modalIsVisible);
  };

  const startTimer = () => {
    if (sound.current?.isPlaying()) sound.current.stop(); // 음원이 재생 여부
    if (!checkFirst) {
      setCheckFirst(true); // 타이머 처음 실행 여부
      // setAudioFile(1);
      // postMutation.mutate({ itemSeq: testSeq, historyType, progressTime: progressTime.current });
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

  const setAudioFile = (ordr: number) => {
    const data = licenseBroadcastList?.filter((el: any) => Number(el.testPeriode) === periode && Number(el.broadcastOrdr) === ordr);
    // console.log("setAudioFile periode ====> :", periode, "ordr ====> :", ordr, "data=====>", data);
    if (sound.current?.isPlaying()) sound.current.release();
    if (!isSkip && data?.length > 0) {
      const uri_file = `${FILE_URL}${data[0].fileUrl}`;
      // const audioFile = new Sound(`http://192.168.0.101:4145/api/v1/common/download-system?fileType=${ordr}`, '', error => {
      const audioFile = new Sound(uri_file, '', error => {
        // const audioFile = new Sound(url, '', error => {
        if (error) {
          console.error('Error loading sound:', error);
        } else {
          // console.log("new Sound")
          sound.current = audioFile;
          playSound();
        }
      });
    }
  };

  const playSound = useCallback(() => {
    if (sound.current) {
      // console.log("playSound=========>")
      sound.current.play((success) => {
        if (success) {
          // console.log('Sound played successfully', checkFirst);
          if (!checkFirst) startTimer();
        } else {
          console.log('Sound playback failed');
        }
        sound.current?.release();
      });
    }
  }, [sound.current])

  const startRestTimer = () => {
    // TODO: 운영용(600), 테스트(60)
    const restTime = 600;
    if (isLunch) {
      setLTime(Number(licenseInfo.lunchTime));
      setRTime(Number(licenseInfo.lunchTime));
    } else {
      setLTime(restTime);
      setRTime(restTime);
    }
    // setPeriode((prevPeriode) => prevPeriode + 1);
    setAudioFile(4);
    setIsRunning(true);
  }

  const skipRestTimer = () => {
    // console.log("skipRestTimer========>","rTime", rTime, "isRunning", isRunning, "isRest", isRest);
    setIsRest(false);
    setIsEndable(false);
    setIsLunch(false);
    // setLTime(licenseTimeList[periode].testPeriodeTime);
    // setRTime(licenseTimeList[periode].testPeriodeTime);
    if (rTime > 30 && isRunning && isRest) {
      setPeriode((prevPeriode) => prevPeriode + 1);
      return
    }
    if (rTime === 0 && !isRunning && isRest) {
      setPeriode((prevPeriode) => prevPeriode + 1);
      return
    }

    // setAudioFile(1);
    // setIsRunning(true);
  }

  useEffect(() => {
    if (data && !isError) {
      // console.log("useEffect data");
      setAudioFile(0); //음원 파일 세팅
      setBroadcastFlag(data?.licenseInfo?.broadcastFlag);
      if (licenseTimeList?.length > 0) {
        setLTime(licenseTimeList[0].testPeriodeTime);
        setRTime(licenseTimeList[0].testPeriodeTime);
      } else {
        setLTime(0);
        setRTime(0);
      }
    }
  }, [data, isError]);

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('MainScreen');
      return true;
    }

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => {
      // saveHistory();
      if (sound.current) sound.current.release();
      BackgroundTimer.clearInterval(intervalRef.current!);
      backHandler.remove();
      // clearInterval(intervalRef.current!);
    }
  }, []);

  useEffect(() => {
    const length = Number(licenseTimeList?.length);
    if ((rTime == lTime / 2) && !!lTime) setIsEndable(true);
    if (rTime == 600 && isRunning && !isRest) { //TODO: 운영(600), 테스트(60)
      setAudioFile(2);
    } else if (rTime === 300 && isRunning && isRest) { //TODO: 운영(300), 테스트(30)
      setPeriode((prevPeriode) => prevPeriode + 1);
    } else if (rTime <= 0 && isRunning && !isRest) {

      setIsRunning(false);
      saveHistory();
      progressTime.current = 0;
      if (length > periode) {
        if ((periode === licenseInfo.lunchPeriode) && licenseInfo.lunchFlag === 'Y') setIsLunch(true);
        setIsRest(!isRest);
        // setAudioFile(3);
      } else if (length === periode) {
        setIsClose(true);
        // setAudioFile(3);
        localNotificationService.showNotification(0, '스이트', '타이머가 종료되었습니다.', {}, { soundName: 'default', playSound: true });
      }
      setAudioFile(3);
      // clearInterval(intervalRef.current!);
      BackgroundTimer.clearInterval(intervalRef.current!);
    } else if (rTime <= 0 && isRunning && isRest) {
      setIsRunning(false);
      setIsRest(!isRest);
      setIsLunch(false);

      BackgroundTimer.clearInterval(intervalRef.current!);
    }
  }, [rTime]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = BackgroundTimer.setInterval(() => {
        setRTime((prevTime: number) => (prevTime > 0 ? prevTime - 1 : 0));
        if (!isRest) progressTime.current = progressTime.current + 1;
        const newTime = new Date(currentTime);
        newTime.setSeconds(newTime.getSeconds() + 1);
        setCurrentTime(newTime);
      }, 1000);
    } else {
      BackgroundTimer.clearInterval(intervalRef.current!);
    }
    return () => {
      BackgroundTimer.clearInterval(intervalRef.current!);
    };
  }, [isRunning, currentTime]);

  useEffect(() => {
    // console.log("useEffect isRest, periode, checkFirst =====>", "periode=========>", periode, "isRest=======>", isRest, "isRunning=======>", isRunning, "checkFirst======>", checkFirst)
    const length = Number(licenseTimeList?.length || 0);
    if (!isRest && isRunning && checkFirst) {
      if (periode === 1) setAudioFile(1);
      else {
        setLTime(licenseTimeList[periode - 1].testPeriodeTime);
        setRTime(licenseTimeList[periode - 1].testPeriodeTime);
        setIsEndable(false);
        setAudioFile(1);
        setIsRunning(true);
      }
      return
    }

    if (isRest && isRunning && checkFirst) {
      setAudioFile(0);
      return
    }

    if (!isRest && !isRunning && checkFirst && (length >= periode)) {
      const periodTime = licenseTimeList[periode - 1]?.testPeriodeTime;
      setLTime(periodTime);
      setRTime(periodTime);
      setIsEndable(false);
      setAudioFile(1);
      setIsRunning(true);
      return
    }

  }, [isRest, periode, checkFirst])

  const TimerText = () => {
    // console.log("TimerText", "checkFirst", checkFirst, "isClose", isClose, "isRunning", isRunning, "isRest", isRest)
    let title = '', content = '';
    // if (checkFirst && !isClose && isRunning && !isRest) {
    if (checkFirst && !isClose && !isRest) {
      title = `시험 진행 중입니다.`;
      content = `제한시간 ½이후 시험 종료가 가능합니다.`;
    } else if (checkFirst && !isClose && !isRunning && isRest) {
      title = `시험 시간이 종료되었습니다.`;
      content = isLunch ? `다음 교시 시작 전 중식 시간이 있습니다.` : `다음 교시 시작 전 쉬는 시간이 있습니다.`
    } else if (checkFirst && !isClose && isRunning && isRest) {
      if (isLunch) {
        title = `중식 시간은 ${formatTime(licenseInfo.lunchTime, 'mm')} 입니다.`;
        content = `중식 시간 시작과 다음 교시 시작 5분 전 \n안내 방송이 나옵니다.`;
      } else {
        title = `쉬는 시간은 10분입니다.`;
        content = `10분 후 다음 교시 타이머가 \n 자동으로 시작됩니다.`;
      }
    } else if (checkFirst && isClose && !isRunning && !isRest) {
      title = extraTime ? `시험 시간이 종료되었습니다. \n\n 경과 시간 : ${formatTime(extraTime, 'HH:mm:ss')}` : '시험 시간이 종료되었습니다.';
      content = '타이머 이용 이력은 더보기 메뉴를 이용해주세요.';
    } else if (checkFirst && isClose && isRunning && !isRest) {
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
      <View style={sStyles.timerBtn}>
        {
          !isRunning ?
            !checkFirst ?
              <TouchableOpacity style={[sStyles.tBBasic, sStyles.tBBasicBg]} onPress={() => startTimer()}>
                <Text style={sStyles.tBWhite}>바로 시작</Text>
              </TouchableOpacity>
              : isRest ?
                <View style={sStyles.timerBtnTwinBack}>
                  <TouchableOpacity style={[sStyles.tBBasic, sStyles.tBTwin]} onPress={() => startRestTimer()}>
                    <Text style={sStyles.tBBLue}>{isLunch ? '중식 시간 진행' : '쉬는 시간 진행'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[sStyles.tBBasic, sStyles.tBTwin]} onPress={() => skipRestTimer()}>
                    <Text style={sStyles.tBBLue}>{isLunch ? '중식 시간 건너띄기' : '쉬는 시간 건너띄기'}</Text>
                  </TouchableOpacity>
                </View>
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
              isRest ?
                <TouchableOpacity style={[sStyles.tBBasic, sStyles.tBBasicBg]} onPress={() => skipRestTimer()}>
                  <Text style={sStyles.tBWhite}>바로 시작</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={sStyles.tBBasic} onPress={() => endTimer()}>
                  <Text style={sStyles.tBBLue}>시험종료</Text>
                </TouchableOpacity>
        }
      </View>
    )
  };

  const onReset = () => {
    setIsSkip(!isSkip);
    setIsRunning(false);
    setCheckFirst(false);
    setIsLunch(false);
    setIsRest(false);

    setCurrentTime(() => {
      const initialTime = new Date();
      initialTime.setHours(9);
      initialTime.setMinutes(0);
      initialTime.setSeconds(0);
      return initialTime;
    });
    if (progressTime.current) progressTime.current = 0;
    if (sound.current) sound.current.release();
    setIsReset(true);
  }

  useEffect(() => {
    if (data && !isError && isReset) {
      setAudioFile(0); //음원 파일 세팅
      setBroadcastFlag(data?.licenseInfo?.broadcastFlag);
      if (licenseTimeList?.length > 0) {
        setLTime(licenseTimeList[0].testPeriodeTime);
        setRTime(licenseTimeList[0].testPeriodeTime);
      } else {
        setLTime(0);
        setRTime(0);
      }
    }
  }, [isReset])

  return (
    // isFetching ? <Spinner visible={isFetching} animation='fade' /> :
    !isFetching &&
    <View style={styles.container} >
      <View style={styles.subHeader}>
        <Pressable onPress={() => navigation.navigate('MainScreen')} style={styles.btnPrev}>
          <Image source={BTN_PREV} style={styles.icBtnPrev} />
        </Pressable>
        <Text style={styles.subTit}>{licenseInfo.licenseName}</Text>
      </View>
      <ScrollView style={styles.subScroll}>
        <TimerTop lTime={lTime} rTime={rTime} broadcastFlag={broadcastFlag} isRunning={isRunning} isSkip={isSkip} onReset={onReset} />
        <Clock currentHour={currentHour} currentMinute={currentMinute} currentSecond={currentSecond} size={200} />
        <View style={sStyles.classTimeInfo}>
          {isRest ? (
            <Text style={sStyles.cTIOn}>{isLunch ? '중식 시간' : '쉬는 시간'}</Text>
          ) : (
            licenseTimeList.length > 0 &&
            licenseTimeList.map((item: any, idx: number) => (
              <Text key={idx} style={periode === item.testPeriode && !isRest ? sStyles.cTIOn : sStyles.cTIOff}>
                {`${item.testPeriode}교시`}
              </Text>
            ))
          )}
        </View>
        <TimerText />
      </ScrollView>
      {/* 버튼 */}
      <TimerButton />
      <PopupModal
        visible={modalIsVisible}
        title={"시험 시간이 \n 종료되었습니다. "}
        message={"계속해서 타이머를 \n 연장 하시겠습니까?"}
        subMessage={""}
        confirmTitle={"예"}
        cancelTitle={"아니오"}
        onCancel={() => toggleModal()}
        onConfirm={() => { setIsRunning(true); toggleModal(); }}
      // onDismiss={() => onHandleDismiss()}
      />
    </View >
  );
};

export default LicenseTimerScreen;
