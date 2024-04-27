import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useRef, useState } from 'react';
import { Alert, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { useMutation } from 'react-query';
import { licenseApi, settingApi } from '../apis';
import { BTN_PREV } from '../assets/images';
import { sStyles, styles } from '../assets/styles';
import PopupModal from '../components/PopupModal';
import { useAppContext } from '../contexts';

type HomeScreenProps = NativeStackScreenProps<ParamListBase, 'Home'>;

const CustomTimerAddScreen: React.FC = ({ navigation }: HomeScreenProps) => {
  const customTimerAlert1 = () =>
    Alert.alert('', '입력한정보가 저장되지 않습니다. \n취소하시겠습니까?', [
      { text: '취소', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      { text: '확인', onPress: () => navigation.navigate('MainScreen') },
    ]);

  const customTimerAlert2 = () =>
    Alert.alert('저장 되었습니다.', '타이머를 시작 하시겠습니까?', [
      { text: '취소', onPress: () => navigation.navigate('MainScreen'), style: 'cancel' },
      { text: '확인', onPress: () => onMoveDetail() },
    ]);

  const [timeName, setTimeName] = useState<string>('');
  const [timeTest, setTimeTest] = useState<string>('');
  const [hour, setHour] = useState<string>('');
  const [minute, setMinute] = useState<string>('');
  // const [timeSeq, setTimeSeq] = useState<string>("");
  const timeSeq = useRef<string>("");
  const { userInfo, setUserInfo } = useAppContext();

  const saveTimer = async () => {
    if (!timeName || !timeTest) {
      Toast.show({ type: 'error', text1: '필수항목 입력해주세요.', });
      return false;
    }

    if ((hour && !minute) || (!hour && minute)) {
      Toast.show({ type: 'error', text1: '시간항목 입력해주세요.', });
      return false;
    }

    const _hour = Number(hour) < 10 ? `0${Number(hour)}` : hour;
    const _minute = Number(minute) < 10 ? `0${Number(minute)}` : minute;
    mutation.mutate({ memSeq: userInfo.memSeq, timeName, timeStart: `${_hour}:${_minute}`, timeTest: Number(timeTest) * 60 });
  }

  const mutation = useMutation(licenseApi.postTimer, {
    // onMutate: variable => {
    //   console.log("onMutate", variable);
    //   // variable : {loginId: 'xxx', password; 'xxx'}
    // },
    onError: (error, variable, context) => {
      console.log("error", error, variable, context)
    },
    onSuccess: ({ data }: any, variables, context) => {
      // console.log("success", data, variables, context);
      // setTimeSeq(data.timeSeq);
      timeSeq.current = data.timeSeq;
      customTimerAlert2();
    },
    // onSettled: (data: any) => {
    //   console.log("end");
    // }
  });

  const onHandleTime = ({ name, value }: any) => {
    // console.log("onHandleTime", "name:",name, "value:",value)
    if (name === 'hour') {
      if (value > 23) {
        // Alert.alert("23시보다 클수 없다");
        setHour('');
        return false;
      }
      setHour(value);
    }

    if (name === 'minute') {
      if (value > 59) {
        // Alert.alert("59분 보다 클 수 없다.")
        setMinute('');
        return false;
      }
      setMinute(value);
    }
  }

  const onMoveDetail = () => {
    // console.log("broadcastFlag========>", userInfo.broadcastFlag, "timeSeq=======>", timeSeq.current,);
    if (userInfo.broadcastFlag === 'Y') {
      navigation.replace('CustomTimer', { timeSeq: timeSeq.current });
    } else {
      toggleModal();
    }
  }

  const saveSetting = async () => {
    settingMutation.mutate({ memSeq: userInfo.memSeq, broadcastFlag: 'Y' });
  }

  const settingMutation = useMutation(settingApi.putSetting, {
    // onMutate: variable => {
    //   console.log("onMutate", variable);
    // },
    onError: (error, variable, context) => {
      console.log("error", error, variable, context)
    },
    onSuccess: ({ data }: any, variables, context) => {
      // console.log("success", data, variables, context);
      setUserInfo({ ...userInfo, ...variables });
      navigation.replace('CustomTimer', { timeSeq: timeSeq.current });
      toggleModal();
    },
    // onSettled: (data: any) => {
    //   console.log("end");
    // }
  });

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const toggleModal = () => {
    setModalIsVisible(!modalIsVisible);
  };

  return (
    <View style={styles.container}>
      <PopupModal
        visible={modalIsVisible}
        title={"스이트 타이머는 \n 안내방송을 포함하고 있습니다."}
        message={"진동모드를 해제한 후 \n 이용해주시기 바랍니다."}
        subMessage={"안내방송 없이 사용을 원하는 경우 \n 하단의 방송 SKIP 버튼을 선택해주세요."}
        cancelTitle={"방송 SKIP"}
        onCancel={() => {
          toggleModal();
          navigation.replace('CustomTimer', { timeSeq: timeSeq.current, isSkip: true });
        }}
        onConfirm={() => saveSetting()}
      // onDismiss={() => toggleModal()}
      />
      <View style={styles.subHeader}>
        <Pressable
          onPress={() => navigation.navigate('MainScreen')}
          style={styles.btnPrev}>
          <Image source={BTN_PREV} style={styles.icBtnPrev} />
        </Pressable>
        <Text style={styles.subTit}>타이머 만들기</Text>
      </View>
      <ScrollView style={styles.subScroll}>
        <View>
          <Text style={sStyles.cTTit}>
            제목 <Text style={styles.must}>*</Text>
          </Text>
          <TextInput
            placeholder="타이머 제목을 입력하세요."
            style={sStyles.cTName}
            onChangeText={(text) => setTimeName(text)}
          />
        </View>
        <View style={[styles.fRow, sStyles.cTTimeInputBack]}>
          <Text style={sStyles.cTTit}>
            시험시간 <Text style={styles.must}>*</Text>
          </Text>
          <View style={sStyles.cTTimeInputArea}>
            <TextInput
              placeholder="00"
              style={sStyles.cTTimeInput}
              keyboardType={'numeric'}
              maxLength={3}
              onChangeText={(text) => setTimeTest(text)}
            />
            <Text style={sStyles.CTlabel1}>분</Text>
          </View>
        </View>
        <View style={[styles.fRow, sStyles.cTTimeInputBack]}>
          <Text style={sStyles.cTTit}>시험 시작 시간</Text>
          <View style={sStyles.cTTimeInputArea}>
            {/* <TextInput placeholder="00" style={sStyles.cTTimeInput} keyboardType={'numeric'} defaultValue={hour} maxLength={2} onEndEditing={(event) => onHandleTime({ name: 'hour', value: event.nativeEvent.text })} /> */}
            <TextInput placeholder="00" style={sStyles.cTTimeInput} keyboardType={'numeric'} defaultValue={hour} maxLength={2} onChangeText={(text) => onHandleTime({ name: 'hour', value: text })} />
            <Text style={sStyles.CTlabel2}>:</Text>
            {/* <TextInput placeholder="00" style={sStyles.cTTimeInput} keyboardType={'numeric'} defaultValue={minute} maxLength={2} onEndEditing={(event) => onHandleTime({ name: 'minute', value: event.nativeEvent.text })} /> */}
            <TextInput placeholder="00" style={sStyles.cTTimeInput} keyboardType={'numeric'} defaultValue={minute} maxLength={2} onChangeText={(text) => onHandleTime({ name: 'minute', value: text })} />
          </View>
        </View>
        <Text style={sStyles.cTinfo}>
          * 타이머에서 표시되는 시작 시간입니다.
        </Text>
      </ScrollView>
      <View style={styles.fRow}>
        <TouchableOpacity onPress={customTimerAlert1} style={[styles.buttons, styles.bgGgray]}>
          <Text style={styles.btnTxt}>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => saveTimer()} style={[styles.buttons, styles.bgBlue]}>
          <Text style={styles.btnTxt}>저장</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomTimerAddScreen;
