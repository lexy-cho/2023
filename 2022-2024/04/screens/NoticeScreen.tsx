import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { sStyles, styles } from '../assets/styles';
import { BTN_PREV, IC_ARROWTB, IMG_BBSSAMPLE } from '../assets/images';
import { useQuery } from 'react-query';
import { settingApi } from '../apis';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { formatDate } from '../utils/format';
import { PageDTO } from "../dto";
import Spinner from "react-native-loading-spinner-overlay";
import { FILE_URL } from '@env';

type MoreScreenProps = NativeStackScreenProps<ParamListBase, "MoreScreen">;

const Notice: React.FC = ({ navigation }: MoreScreenProps) => {
  const [page, setPage] = useState<PageDTO>({ itemsPerPage: 10, row: 0 });
  const [expandedIndex, setExpandedIndex] = useState<number>(-1); // 초기에는 펼쳐진 아이템이 없음을 나타내기 위해 -1로 설정

  const getNotices = async (): Promise<{ totalCnt: number; list: any[]; }> => {
    try {
      const params = { startRow: page.row * page.itemsPerPage, pageCnt: page.itemsPerPage };
      const response: any = await settingApi.getNotices(params);
      if (response.statusCode === 200) {
        return { totalCnt: response.data.cnt, list: response.data.list };
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  }

  const { data, isLoading, isFetching } = useQuery<{ totalCnt: number; list: any[] }>(['notices', page], getNotices);
  // const noticeList = data?.list;
  const currentPage = page.row + 1;
  const totalCnt = data?.totalCnt;
  const remainPage = Math.floor((((totalCnt || 0) - (currentPage * page.itemsPerPage)) / page.itemsPerPage) + 1);

  const [noticeList, setNoticeList] = useState<any>([]);

  useEffect(() => {
    if (data) setNoticeList((prevList: any) => ([...prevList, ...data?.list]))
  }, [data])

  const toggleItem = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1); // 같은 아이템을 두 번 누르면 아이템 닫기
    } else {
      setExpandedIndex(index); // 아이템 열기
    }
  };

  const onPressMore = () => {
    //TODO: useMemo나 이런부분 사용해야할듯??
    setPage((prevPage) => ({
      ...prevPage,
      row: prevPage.row + 1
    }));
    setShowScrollButton(false);
  }

  const renderFileItem = (item: any) => {
    const uri_file = `${FILE_URL}${item.fileUrl}`;
    const fileUrl = item.fileUrl ? { uri: uri_file } : IMG_BBSSAMPLE;
    return (
      <Image source={fileUrl} style={sStyles.bbsImg} />
    )
  }

  const flatListRef = useRef<FlatList>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = (event: any) => {
    const windowHeight = Dimensions.get('window').height;
    const contentHeight = event.nativeEvent.contentSize.height;
    const scrollOffset = event.nativeEvent.contentOffset.y;
    if (contentHeight > windowHeight * 1.5) {
      const shouldShowButton = scrollOffset > 0.3 * (contentHeight - windowHeight);
      setShowScrollButton(shouldShowButton);
    }
  };

  const getIsNew = (regDate: string | undefined) => {
    if (!regDate) return false;

    const today = new Date();
    const regDay = new Date(regDate);
    const compareDay = new Date(regDay);
    compareDay.setDate(regDay.getDate() + 7);

    const formattedCompareDay = formatDate(compareDay, 'YYYY-MM-DD');
    const formattedToday = formatDate(today, 'YYYY-MM-DD');

    return formattedCompareDay > formattedToday;
  }

  return (
    isFetching ? <Spinner visible={isFetching} animation='fade' /> :
      <View style={styles.container}>
        <View style={styles.subHeader}>
          <Pressable onPress={() => navigation.navigate('MoreScreen')} style={styles.btnPrev}>
            <Image source={BTN_PREV} style={styles.icBtnPrev} />
          </Pressable>
          <Text style={styles.subTit}>공지사항</Text>
        </View>
        <FlatList
          ref={flatListRef}
          style={styles.subScroll}
          data={noticeList}
          keyExtractor={(item, index) => item.boardSeq || index.toString()} // 각 아이템의 고유 키 지정
          onScroll={handleScroll} //top button 
          scrollEventThrottle={16} //top button
          renderItem={({ item: notice, index }) => (
            <View style={sStyles.bbsRow}>
              <TouchableOpacity onPress={() => toggleItem(index)}>
                <View style={sStyles.bbsTop}>
                  <View style={sStyles.bbsTopTxt}>
                    <Text style={sStyles.bbsTit}>{notice.boardSubject} {getIsNew(notice.regDate) && <Text style={sStyles.bbsNew}>·</Text>}</Text>
                    <Text style={sStyles.bbsDate}>{formatDate(notice.regDate, 'YYYY-MM-DD')}</Text>
                  </View>
                  <View style={sStyles.bbsOnOff}><Image source={IC_ARROWTB} style={expandedIndex === index ? [sStyles.icATB, sStyles.icATBOn] : sStyles.icATB} /></View>
                </View>
              </TouchableOpacity>
              {expandedIndex === index && (
                <View style={sStyles.bbsDetail}>
                  <Text>{notice.boardContent}</Text>
                  <FlatList
                    data={notice.fileList}
                    keyExtractor={(item, i) => item.fileSeq || i.toString()}
                    renderItem={({ item }) => renderFileItem(item)}
                    ListEmptyComponent={null}
                  />
                </View>
              )}
            </View>
          )}
          ListEmptyComponent={() => (
            <View style={sStyles.bbsRow}>
              <Text style={sStyles.bbsNone}>
                등록된 공지사항이 없습니다
              </Text>
            </View>
          )}
          ListFooterComponent={() => (
            noticeList && (remainPage > 0) && <Pressable onPress={() => onPressMore()} style={sStyles.bbsMore}>
              <Text style={sStyles.bbsMoreNum}>{remainPage}</Text>
              <Text style={sStyles.bbsMoreTxt}>더보기 +</Text>
            </Pressable>
          )}
        />
        {showScrollButton && <ScrollToTopButton flatListRef={flatListRef} />}
      </View>
  );
};



export default Notice;
