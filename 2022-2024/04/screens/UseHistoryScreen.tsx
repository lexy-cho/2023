import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useRef, useState } from 'react';
import { Alert, Dimensions, FlatList, Image, ListRenderItem, Pressable, Text, TouchableHighlight, View } from 'react-native';
import { sStyles, styles } from '../assets/styles';
import { useMutation, useQuery } from 'react-query';
import { settingApi } from '../apis';
import { BTN_PREV, IC_SMALLTRASH, IC_TRASH } from '../assets/images';
import { useAppContext } from '../contexts';
import { formatDate, formatTime } from '../utils/format';
import Spinner from "react-native-loading-spinner-overlay";
import ScrollToTopButton from "../components/ScrollToTopButton";

type MoreScreenProps = NativeStackScreenProps<ParamListBase, "MoreScreen">;

const UseHistory: React.FC = ({ navigation }: MoreScreenProps) => {
  const { userInfo } = useAppContext();

  const getUses = async () => {
    const params = { memSeq: userInfo.memSeq };
    const response: any = await settingApi.getUses(params);
    if (response.statusCode === 200) return response.data.list;
  }

  const deleteAllUse = async () => {
    Alert.alert('', '사용이력 전체를 \n 삭제 하시겠습니까?', [
      { text: '취소', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      { text: '확인', onPress: () => mutation.mutate({ memSeq: userInfo.memSeq }) },
    ]);
  }

  const deleteUse = async (historySeq: any) => {
    Alert.alert('', '해당 이력을 \n 삭제 하시겠습니까?', [
      { text: '취소', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      { text: '확인', onPress: () => mutation.mutate({ memSeq: userInfo.memSeq, historySeq }) },
    ]);
  }

  const mutation = useMutation(settingApi.deleteUse, {
    // onMutate: variable => {
    // console.log("onMutate", variable);
    // variable : {loginId: 'xxx', password; 'xxx'}
    // },
    onError: (error, variable, context) => {
      console.log("error", error, variable, context)
    },
    onSuccess: ({ data }: any, variables, context) => {
      // console.log("success", data, variables, context);
      refetch();
    },
    // onSettled: (data: any) => {
    //   console.log("end");
    // }
  });

  const { data: useList, isLoading, isFetching, refetch } = useQuery<any[]>('uses', getUses);
  // console.log(useList);

  const flatListRef = useRef<FlatList>(null);
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

  const handleScroll = (event: any) => {

    const windowHeight = Dimensions.get('window').height;
    const contentHeight = event.nativeEvent.contentSize.height;
    const scrollOffset = event.nativeEvent.contentOffset.y;

    const shouldShowButton = scrollOffset > 0.3 * (contentHeight - windowHeight);
    setShowScrollButton(shouldShowButton);
  };

  const renderItem = (use: any) => {
    return (
      <View style={sStyles.historyRow}>
        <Text style={sStyles.hDate}>{formatDate(use.regDate, 'YYYY-MM-DD')}</Text>
        <View style={styles.fRow}>
          <Text style={sStyles.hLicenseName}>{`${use.testName} (${formatTime(use.testTime, '')})`}</Text>
          <Text style={sStyles.historyTime}>{formatTime(use.progressTime, '')}</Text>
        </View>
        {use.licenseTimeVO && (
          <Text style={sStyles.multyClassHistory}>
            {use.licenseTimeVO.map((el: any, idx: number) => (
              <React.Fragment key={idx}>
                {el.testPeriode}교시 <Text style={sStyles.mutyCHTime}>{formatTime(el.testPeriodeTime, '')}</Text>({formatTime(el.progressTime, '')})
                {idx % 2 === 0 && (idx === use.licenseTimeVO.length - 1 ? '' : ' | ')}
                {idx % 2 === 1 && '\n'}
              </React.Fragment>
            ))}
          </Text>
        )}
        <TouchableHighlight style={sStyles.btnHTrash} onPress={() => deleteUse(use.historySeq)}>
          <Image source={IC_SMALLTRASH} style={sStyles.icBtnHT} />
        </TouchableHighlight>
      </View>
    )
  }

  return (
    isFetching ? <Spinner visible={isFetching} animation='fade' /> :
      <View style={styles.container}>
        <View style={styles.subHeader}>
          <Pressable onPress={() => navigation.navigate('MoreScreen')} style={styles.btnPrev}>
            <Image source={BTN_PREV} style={styles.icBtnPrev} />
          </Pressable>
          <Text style={styles.subTit}>사용이력</Text>
          {/* <Pressable onPress={() => Alert.alert('전체삭제합니다')} style={sStyles.btnAllTrash}> */}
          <Pressable onPress={() => deleteAllUse()} style={sStyles.btnAllTrash}>
            <Image source={IC_TRASH} style={sStyles.icBtnAT} />
          </Pressable>
        </View>

        <FlatList
          ref={flatListRef}
          style={styles.subScroll}
          data={useList}
          keyExtractor={(item, index) => item.historySeq || index.toString()} // 각 아이템의 고유 키 지정
          listKey={'useList'}
          onScroll={handleScroll} //top button 
          scrollEventThrottle={12} //top button
          renderItem={({ item: use, index }) => renderItem(use)}
          ListEmptyComponent={() => (
            <View style={sStyles.historyRow}>
              <Text style={sStyles.hNone}>
                타이머 사용이력이 없습니다. {"\n"}
                <Text style={sStyles.hNoneGo} onPress={() => navigation.navigate('SearchLicense')}>
                  자격증을 찾아보세요.
                </Text>
              </Text>
            </View>
          )}
        />
        {showScrollButton && <ScrollToTopButton flatListRef={flatListRef} />}
      </View>
  );
};

export default UseHistory;
