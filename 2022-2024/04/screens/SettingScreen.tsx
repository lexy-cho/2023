import React from 'react';
import { Alert, Image, Pressable, ScrollView, Switch, Text, View } from 'react-native';
import { useMutation } from 'react-query';
import { settingApi } from '../apis';
import { IC_ARROWRIGHT } from '../assets/images';
import { sStyles, styles } from '../assets/styles';
import { useAppContext } from '../contexts';
import Admob from '../components/Admob';

const SettingScreen: React.FC = () => {
  const { userInfo, setUserInfo } = useAppContext();

  // const getSetting = async () => {
  //   // const userInfo = await storage.getItem(AUTH.USER_INFO);
  //   const params = { memSeq: userInfo.memSeq };
  //   const response: any = await settingApi.getSetting(params);
  //   if (response.statusCode === 200) return response.data.result;
  // }

  // const { data: result, isLoading, refetch } = useQuery<any>('settings', getSetting);

  const toggleSwitch = async (name: string, checked: boolean) => {
    // console.log("checked=======>", name, checked)
    // const memSeq = await storage.getItem(AUTH.USER_INFO);
    const memSeq = userInfo.memSeq;
    mutation.mutate({ memSeq, [name]: checked ? 'Y' : 'N' });
  }

  const mutation = useMutation(settingApi.putSetting, {
    // onMutate: variable => {
    //   console.log("onMutate", variable);
    // },
    onError: (error, variable, context) => {
      console.log("error", error, variable, context)
    },
    onSuccess: ({ data }: any, variables, context) => {
      // console.log("success", data, variables, context);
      setUserInfo({ ...userInfo, ...variables });
      // refetch();
    },
    // onSettled: (data: any) => {
    //   console.log("end");
    // }
  });

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Text style={styles.subTit}>설정</Text>
      </View>
      <ScrollView style={styles.subScroll}>
        <View style={sStyles.setList}>
          <View style={sStyles.setRow}>
            <View style={styles.fRow}>
              <Text style={sStyles.setTit}>타이머 연장 설정</Text>
              <Switch
                trackColor={{ false: '#dddddd', true: '#1E8AF3' }}
                thumbColor={userInfo?.timerFlag === 'Y' ? '#fff' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(value) => toggleSwitch('timerFlag', value)}
                value={userInfo?.timerFlag === 'Y' ? true : false}
              />
            </View>
            <Text style={sStyles.etcInfo}>시험시간이 끝나도 타이머 작동을 계속 사용합니다</Text>
          </View>
          <View style={sStyles.setRow}>
            <View style={styles.fRow}>
              <Text style={sStyles.setTit}>기출문제 PUSH</Text>
              <Switch
                trackColor={{ false: '#dddddd', true: '#1E8AF3' }}
                thumbColor={userInfo?.pushFlag === 'Y' ? '#fff' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(value) => toggleSwitch('pushFlag', value)}
                value={userInfo?.pushFlag === 'Y' ? true : false}
              />
            </View>
            <Text style={sStyles.etcInfo}>타이머 사용한 자격시험의 기출문제 업데이트 시  {"\n"}Push 알람이 발송됩니다.</Text>
          </View>
          <View style={sStyles.setRow}>
            <View style={styles.fRow}>
              <Text style={sStyles.setTit}>안내방송 사용여부</Text>
              <Switch
                trackColor={{ false: '#dddddd', true: '#1E8AF3' }}
                thumbColor={userInfo?.broadcastFlag === 'Y' ? '#fff' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(value) => toggleSwitch('broadcastFlag', value)}
                value={userInfo?.broadcastFlag === 'Y' ? true : false}
              />
            </View>
          </View>
          <View style={sStyles.setRow}>
            {/* <View style={styles.fRow}>
              <Text style={[sStyles.setTit, styles.disabled]}>광고 제외하기</Text>
              <Image source={IC_ARROWRIGHT} style={[sStyles.icARight, styles.disabled]} />
            </View> */}
            <Pressable style={styles.fRow} onPress={() => Alert.alert('준비중인 기능입니다')}>
              <Text style={[sStyles.setTit, styles.disabled]}>광고 제외하기</Text>
              <Image source={IC_ARROWRIGHT} style={[sStyles.icARight, styles.disabled]} />
            </Pressable>
          </View>
        </View>
      </ScrollView>
      {/* 광고영역 */}
      {/* <Text style={styles.bannerArea}>{'광고영역'}</Text> */}
      <Admob/>
    </View>
  );
};

export default SettingScreen;
