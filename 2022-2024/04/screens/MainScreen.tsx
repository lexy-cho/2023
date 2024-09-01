import { FILE_URL } from '@env';
import React, { useEffect, useState } from 'react';
import { Alert, Image, Pressable, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Spinner from 'react-native-loading-spinner-overlay';
import Carousel from 'react-native-snap-carousel';
import Toast from 'react-native-toast-message';
import { useMutation, useQuery } from 'react-query';
import { mainApi, settingApi } from "../apis";
import { BTN_ADD, IC_BADGE, IC_EXIT, IC_LICENSEFILE, IC_NOTICE } from '../assets/images';
import { mStyles, styles } from '../assets/styles';
import Admob from '../components/Admob';
import PopupModal from '../components/PopupModal';
import { MainScreenProps } from '../components/component';
import { useAppContext } from '../contexts';
import { LicenseDTO } from '../dto';

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  // console.log("MainScreen===========================>")
  const { userInfo, setUserInfo } = useAppContext();
  const toggleModal = () => {
    setModalIsVisible(!modalIsVisible);
  };

  /** 
   * 자격증 목록
   * @returns
   */
  const getLicenses = async () => {
    const params = { memSeq: userInfo.memSeq };
    const response: any = await mainApi.getLicenses(params);
    // if (response.statusCode === 200) return response.data.list;
    if (response.statusCode === 200) {
      const updateList = response.data.list;
      if (updateList.length > 0) updateList.push({ licenseSeq: '' });
      return updateList;
    }
  }

  const deleteLicense = async (testSeq: any) => {
    Alert.alert('', '삭제된 자격증은 검색을 통해 \n 재선택이 가능합니다.', [
      { text: '취소', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      { text: '확인', onPress: () => licenseMutation.mutate({ memSeq: userInfo.memSeq, testSeq }) },
    ]);
  }

  const licenseMutation = useMutation(mainApi.deleteLicense, {
    // onMutate: variable => {
    //   console.log("onMutate", variable);
    // },
    onError: (error, variable, context) => {
      console.log("error", error, variable, context)
    },
    onSuccess: ({ data }: any, variables, context) => {
      // console.log("success", data, variables, context);
      refetchLicense();
    },
    // onSettled: (data: any) => {
    //   console.log("end");
    // }
  });

  /**
   * 많이 찾는 자격증
   * @returns 
   */
  const getLicenseManys = async () => {
    const response: any = await mainApi.getLicenseManys({});
    if (response.statusCode === 200) return response.data.list;
  }

  /**
   * 타이머(커스텀) 목록
   * @returns 
   */
  const getTimers = async () => {
    const params = { memSeq: userInfo.memSeq };
    const response: any = await mainApi.getTimers(params);
    if (response.statusCode === 200) return response.data.list;
  }

  /**
   *  타이머 삭제
   * @param timeSeq 
   */
  const deleteTimer = async (timeSeq: string) => {
    Alert.alert('', '삭제된 타이머 정보는 복구할 수 없습니다. \n 삭제 하시겠습니까?', [
      { text: '취소', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      { text: '확인', onPress: () => timerMutation.mutate({ memSeq: userInfo.memSeq, timeSeq }) },
    ]);
  }

  const timerMutation = useMutation(mainApi.deleteTimer, {
    // onMutate: variable => {
    //   console.log("onMutate", variable);
    // },
    onError: (error, variable, context) => {
      console.log("error", error, variable, context)
    },
    onSuccess: ({ data }: any, variables, context) => {
      // console.log("success", data, variables, context);
      refetchTimer();
    },
    // onSettled: (data: any) => {
    //   console.log("end");
    // }
  });

  /**
   * 공지사항 목록
   * @returns 
   */
  const getNotices = async () => {
    const response: any = await mainApi.getNotices({});
    if (response.statusCode === 200) return response.data.list;
  }

  const saveSetting = async () => {
    settingMutation.mutate({ memSeq: userInfo.memSeq, broadcastFlag: 'Y' });
  }

  const settingMutation = useMutation(settingApi.putSetting, {
    onError: (error, variable, context) => {
      console.log("error", error, variable, context)
    },
    onSuccess: ({ data }: any, variables, context) => {
      // console.log("success", data, variables, context);
      setUserInfo({ ...userInfo, ...variables });
      onHandleSkip(type, false);
    },
  });

  const { data: licenseList, isLoading: isLoadingLicense, isFetching: isFetchingLicense, refetch: refetchLicense, } = useQuery<LicenseDTO[]>('licenses', getLicenses, { enabled: !!userInfo.memSeq });
  const { data: manyList, isLoading: isLoadingMany, isFetching: isFetchingMany } = useQuery<any[]>('manys', getLicenseManys, { enabled: !!userInfo.memSeq });
  const { data: timerList, isLoading: isLoadingTimer, isFetching: isFetchingTimer, refetch: refetchTimer } = useQuery<any[]>('timers', getTimers, { enabled: !!userInfo.memSeq });
  const { data: noticeList, isLoading: isLoadingNotice, isFetching: isFetchingNotice } = useQuery<any[]>('notices', getNotices, { enabled: !!userInfo.memSeq });
  // console.log("MainScreen =====================================>", licenseList);

  const renderItem = ({ licenseSeq, licenseName, testSeq, fileUrl }: LicenseDTO) => {
    // console.log("renderItem", fileUrl)
    const uri_file = `${FILE_URL}${fileUrl}`;
    return (
      <View style={[styles.fRow, mStyles.choiceLicenseBack]}>
        {licenseSeq ? (
          <View style={mStyles.choiceLicense}>
            <Image source={IC_LICENSEFILE} style={mStyles.icFile} />
            <Pressable onPress={() => deleteLicense(testSeq)}>
              <Image source={IC_EXIT} style={mStyles.icExit} />
            </Pressable>
            <Pressable style={mStyles.noLicenseAdd} onPress={() => onMoveLicenseTimer(licenseSeq, testSeq)}>
              <Image source={{ uri: uri_file }} style={mStyles.icCLicense} />
              <Text style={mStyles.cLicenseTxt}>{licenseName}</Text>
            </Pressable>
          </View>
        ) : (
          <>
            {/* <Image source={IC_LICENSEFILE} style={mStyles.icFile} /> */}
            <Pressable style={mStyles.choiceLicense} onPress={() => navigation.navigate('SearchLicense')}>
              <View style={mStyles.noLicenseAdd}>
                <Image source={BTN_ADD} style={mStyles.icLicenseAdd} />
              </View>
            </Pressable>
          </>
        )}
      </View>
    )
  }

  const TimerButton = () => {
    const flag = timerList?.length === 0;
    return (
      <Pressable style={[styles.fRow, flag ? mStyles.cTimerAdd : mStyles.cTimerListAdd]}
        onPress={() => {
          if (timerList && timerList.length > 9) {
            Toast.show({ type: 'error', text1: '타이머 만들기는 최대 10개까지 가능합니다.' });
            return
          }
          else navigation.navigate('CustomTimerAdd');
        }}
      >
        <Text style={mStyles.cTimerTit}>{flag ? '타이머 만들기' : '타이머 추가하기'}</Text>
        <Image source={BTN_ADD} defaultSource={BTN_ADD} style={flag ? mStyles.icCTimerAdd : mStyles.icCTimerListAdd} />
      </Pressable>
    )
  }

  const [seq, setSeq] = useState<string>(''); // custom : timeSeq, license : licenseSeq
  const [seq2, setSeq2] = useState<string>(''); // license : testSeq
  const [type, setType] = useState<string>('');
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const onMoveCustomTimer = (seq: string) => {
    const type = 'CUSTOM';
    if (userInfo.broadcastFlag === 'Y' && seq) {
      navigation.navigate('CustomTimer', { timeSeq: seq, isSkip: false });
    } else {
      setSeq(seq);
      setType(type);
      toggleModal();
    }
  }

  const onMoveLicenseTimer = (seq: string, seq2: string) => {
    const type = 'LICENSE';
    if (userInfo.broadcastFlag === 'Y' && seq && seq2) {
      navigation.navigate('LicenseTimer', { licenseSeq: seq, testSeq: seq2, isSkip: false });
    } else {
      setSeq(seq);
      setSeq2(seq2);
      setType(type);
      toggleModal();
    }
  }

  const onHandleSkip = (type: string, isSkip: boolean) => {
    if (type === 'CUSTOM') {
      navigation.navigate('CustomTimer', { timeSeq: seq, isSkip: isSkip });
    } else {
      navigation.navigate('LicenseTimer', { licenseSeq: seq, testSeq: seq2, isSkip: isSkip });
    }
    toggleModal();
  }

  const onHandleDismiss = () => {
    toggleModal();
    setSeq('');
    setSeq2('');
    setType('');
  }

  useEffect(() => {
    // const unsubscribe = navigation.addListener('focus', () => {
    //   refetchLicense();
    //   refetchTimer();
    // });

    // return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (isLoadingLicense || isLoadingMany || isLoadingTimer || isLoadingNotice) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [isLoadingLicense, isLoadingMany, isLoadingTimer, isLoadingNotice])

  return (
    isLoading ? <Spinner visible={isLoading} animation='fade' /> :
      <View style={styles.container}>
        {/* 자격증을 찾아보세요 */}
        <View style={styles.mainTop}>
          {(licenseList?.length === 0 || !licenseList) ?
            <View style={mStyles.noLicense}>
              <Image source={IC_LICENSEFILE} defaultSource={IC_LICENSEFILE} style={mStyles.icFile} />
              <Pressable style={mStyles.noLicenseAdd} onPress={() => navigation.navigate('SearchLicense')} >
                <Text style={mStyles.noLicenseTxt}><Text style={mStyles.noLicenseTxtStrong}>자격증</Text>을 찾아보세요</Text>
                <Image source={BTN_ADD} defaultSource={BTN_ADD} style={mStyles.icLicenseAdd} />
              </Pressable>
            </View>
            :
            <View style={{ height: 160, marginBottom: -20 }}>
              <Carousel
                data={licenseList}
                renderItem={({ item }) => {
                  return renderItem(item);
                }}
                itemWidth={175}
                sliderWidth={350}
                layout={'default'}              // 'default', 'stack', 'tinder'
                inactiveSlideScale={1}          // Scale for inactive slides (1 means no scaling)
                activeSlideAlignment={'start'}  // Alignment of active slide
                enableMomentum={true}
              />
            </View>
          }
        </View>
        {/* 메인에서 스크롤영역 */}
        <FlatList
          data={null}
          renderItem={null}
          style={styles.mainScroll}
          ListEmptyComponent={
            <>
              {/* 많이 찾는 자격증 */}
              <FlatList
                style={mStyles.bestBack}
                columnWrapperStyle={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                }}
                numColumns={3}
                data={manyList}
                keyExtractor={(item, index) => item.licenseSeq || index.toString()}
                listKey={'manyList'}
                renderItem={({ item: many, index }) => (
                  <View style={mStyles.bestCol}>
                    <Image source={IC_BADGE} defaultSource={IC_BADGE} style={mStyles.bestBadge} />
                    <View style={mStyles.bestBtn}>
                      <Text style={mStyles.bestLicenseName}>{many.licenseName}</Text>
                    </View>
                    {/* <Pressable style={mStyles.bestBtn} onPress={() => onMoveTimer(many.licenseSeq, 'LICENSE')} >
                      <Text style={mStyles.bestLicenseName}>{many.licenseName}</Text>
                    </Pressable> */}
                  </View>
                )}
                ListHeaderComponent={<Text style={mStyles.bestTit}>많이 찾는 자격증</Text>}
                ListEmptyComponent={null}
              />
              {/* 타이머 */}
              <FlatList
                data={timerList}
                keyExtractor={(item, index) => item.timeSeq || index.toString()}
                listKey={'timerList'}
                renderItem={({ item: timer, index }) => (
                  <View style={[styles.fRow, mStyles.cTimerRow]}>
                    <Pressable style={mStyles.cTimerGo} onPress={() => onMoveCustomTimer(timer.timeSeq)}>
                      <Text>{timer.timeName}</Text>
                    </Pressable>
                    {/* <TouchableHighlight style={mStyles.btnExit} onPress={() => deleteTimer(timer.timeSeq)}> */}
                    <Pressable style={mStyles.btnExit} onPress={() => deleteTimer(timer.timeSeq)}>
                      <Image source={IC_EXIT} defaultSource={IC_EXIT} style={mStyles.btnExitIcon} />
                    </Pressable>
                    {/* </TouchableHighlight> */}
                  </View>
                )}
                ListFooterComponent={<TimerButton />}
                ListEmptyComponent={null}
              />
              {/* 공지사항 */}
              <FlatList
                data={noticeList}
                contentContainerStyle={mStyles.noticeBack}
                keyExtractor={(item, index) => item.boardSeq || index.toString()}
                listKey={'noticeList'}
                renderItem={({ item: notice, index }) => (
                  <View style={[styles.fRow, mStyles.noticeBox]}>
                    <Image source={IC_NOTICE} defaultSource={IC_NOTICE} style={mStyles.icNoticeTit} />
                    <Text style={mStyles.noticeTit}>공지사항</Text>
                    <Pressable style={mStyles.noticeData} onPress={() => navigation.navigate('Notice')} >
                      <Text numberOfLines={1} ellipsizeMode='tail'>{notice.boardSubject}</Text>
                    </Pressable>
                  </View>
                )}
                ListEmptyComponent={null}
              />
            </>
          }
        />

        <PopupModal
          visible={modalIsVisible}
          title={"스이트 타이머는 \n 안내방송을 포함하고 있습니다."}
          message={"진동모드를 해제한 후 \n 이용해주시기 바랍니다."}
          subMessage={"안내방송 없이 사용을 원하는 경우 \n 하단의 방송 SKIP 버튼을 선택해주세요."}
          cancelTitle={"방송 SKIP"}
          onCancel={() => onHandleSkip(type, true)}
          onConfirm={() => saveSetting()}
          onDismiss={() => onHandleDismiss()}
        />
        {/* 광고영역 */}
        {/* <Text style={styles.bannerArea}>{'광고영역'}</Text> */}
        <Admob />
      </View>
  );
};



export default MainScreen;
