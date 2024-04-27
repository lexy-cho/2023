import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { useQuery } from 'react-query';
import { mainApi } from '../apis';
import { IC_ARROWRIGHT } from '../assets/images';
import { sStyles, styles } from '../assets/styles';
import { VersionDTO } from '../dto';
import Admob from "../components/Admob";

type MoreScreenProps = NativeStackScreenProps<ParamListBase, "more">;
const MoreScreen: React.FC = ({ navigation }: MoreScreenProps) => {

  /**
   * 버전 정보
   * @returns 
   */
  const getVersion = async () => {
    const params = { verOs: DeviceInfo.getSystemName() === 'iOS' ? 'I' : 'A' };
    const response: any = await mainApi.getVersion(params);
    if (response.statusCode === 200) return response.data.result;
  }

  const { data: result, isLoading, isFetching } = useQuery<VersionDTO>('version', getVersion);

  const onMoveStore = () => {
    //TODO: 현재 앱 버전과 최신 앱버전이 다른경우 스토어로 이동해야한다.
  }

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Text style={styles.subTit}>더보기</Text>
      </View>
      <ScrollView style={styles.subScroll}>
        <View style={sStyles.setList}>
          <View style={sStyles.setRow}>
            <Pressable style={styles.fRow} onPress={() => navigation.navigate('UseHistory')}>
              <Text style={sStyles.setTit}>사용 이력</Text>
              <Image source={IC_ARROWRIGHT} style={sStyles.icARight} />
            </Pressable>
          </View>
          <View style={sStyles.setRow}>
            <Pressable style={styles.fRow} onPress={() => navigation.navigate('Notice')}>
              <Text style={sStyles.setTit}>공지사항  {/*<Text style={styles.new}>·</Text>*/}</Text>
              <Image source={IC_ARROWRIGHT} style={sStyles.icARight} />
            </Pressable>
          </View>
          <View style={sStyles.setRow}>
            <Pressable style={styles.fRow} onPress={() => navigation.navigate('Push')}>
              <Text style={sStyles.setTit}>알림  {/*<Text style={styles.new}>·</Text>*/}</Text>
              <Image source={IC_ARROWRIGHT} style={sStyles.icARight} />
            </Pressable>
          </View>
          <View style={sStyles.setRow}>
            <Pressable style={styles.fRow} onPress={() => navigation.navigate('Policy')}>
              <Text style={sStyles.setTit}>개인정보취급방침</Text>
              <Image source={IC_ARROWRIGHT} style={sStyles.icARight} />
            </Pressable>
          </View>
          <View style={sStyles.setRow}>
            <View style={styles.fRow}>
              <Text style={sStyles.setTit}>버전정보</Text>
              <Text style={sStyles.dataTxt}>{result?.verNo}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* 광고영역 */}
      {/* <Text style={styles.bannerArea}>{'광고영역'}</Text> */}
      <Admob/>
    </View>
  );
};

export default MoreScreen;
