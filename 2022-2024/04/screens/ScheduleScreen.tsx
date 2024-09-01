import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Linking, Platform, StyleSheet, Text, TextStyle, TouchableOpacity, View } from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';
import { FlatList } from 'react-native-gesture-handler';
import { useQuery } from 'react-query';
import { licenseApi } from '../apis';
import { formatDate } from '../utils/format';
import { scStyles } from '../assets/styles';
import Spinner from 'react-native-loading-spinner-overlay';

type HomeScreenProps = NativeStackScreenProps<ParamListBase, 'Home'>;

const ScheduleScreen: React.FC = ({ navigation }: HomeScreenProps) => {
  const [calType, setCalType] = useState<string>('M');
  const [year, setYear] = useState<string>(formatDate(new Date, 'YYYY'));
  const [month, setMonth] = useState<string>(formatDate(new Date, 'MM'));
  const [markedDates, setMarkedDates] = useState<any>({});
  const toDay = formatDate(new Date, 'YYYY-MM-DD');
  const [data, setData] = useState<any>([]);

  const fullMonth = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

  const getLicenseCalendars = async () => {
    const params = { searchMonth: month, searchYear: year };
    const response: any = await licenseApi.getLicenseCalendars(params);
    if (response.statusCode === 200) {
      setCalendarData(response.data.list);
      return response.data.list;
    }
  }

  const { data: calendarList, isLoading, isFetched, isFetching, refetch } = useQuery<any[]>('LicenseCalendars', getLicenseCalendars);
  // console.log("isLoading ==== > ", isLoading , "isFetched =====>", isFetched, "isFetching ========= >", isFetching)

  const CalendarHeader = ({ title, onPressLeft, onPressRight }: any) => {
    return (
      <View style={scStyles.header}>
        <TouchableOpacity onPress={onPressLeft}>
          <Text style={scStyles.headerText}>◀</Text>
        </TouchableOpacity>
        <Text style={scStyles.headerText}>{title}</Text>
        <TouchableOpacity onPress={onPressRight}>
          <Text style={scStyles.headerText}>▶</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const setCalendarData = (calendarList: any) => {
    const receiptList = [] as any[];
    const writeList = [] as any[];
    const successList = [] as any[];
    const dates = new Set<string>();

    const mergedMap = new Map<string, any>();

    calendarList?.forEach((obj: any) => {
      const key = `${obj.licenseGrade}-${obj.testRound}-${obj.testYear}-${obj.licenseName}`;
      if (mergedMap.has(key)) {
        const existingObj = mergedMap.get(key);
        if (obj.additionFlag === 'Y') {
          existingObj.additionFlag = 'Y';
          existingObj.addReceiptStartDate = obj.receiptStartDate;
          existingObj.addReceiptEndDate = obj.receiptEndDate;
        }
      } else {
        const newObj = { ...obj, addReceiptEndDate: '', addReceiptStartDate: '' };
        if (obj.additionFlag === 'Y') {
          newObj.additionFlag = 'Y';
          newObj.addReceiptStartDate = obj.receiptStartDate;
          newObj.addReceiptEndDate = obj.receiptEndDate;
        }
        mergedMap.set(key, newObj);
      }
    });

    const yyyMM = `${year}-${month}`;

    mergedMap.forEach((el: any) => {
      const receiptStartDate = formatDate(el.receiptStartDate, 'YYYY-MM');
      const receiptEndDate = formatDate(el.receiptEndDate, 'YYYY-MM');
      const writeStartDate = formatDate(el.writeStartDate, 'YYYY-MM');
      const writeEndDate = formatDate(el.writeEndDate, 'YYYY-MM');
      const successDate = formatDate(el.successDate, 'YYYY-MM-DD');

      if (receiptStartDate === yyyMM || receiptEndDate === yyyMM) {
        const sub = [
          { innerMain: `해당기간 ${formatDate(el.receiptStartDate, 'YYYY년 MM월 DD일')} ~ ${formatDate(el.receiptEndDate, 'YYYY년 MM월 DD일')}` },
          el.additionFlag === 'Y' ? { innerMain: `(빈자리 추가 ${formatDate(el.receiptStartDate, 'YYYY년 MM월 DD일')} ~ ${formatDate(el.receiptEndDate, 'YYYY년 MM월 DD일')})` } : null
        ].filter(Boolean);

        const data = {
          date: receiptStartDate === yyyMM ? el.receiptStartDate : el.receiptEndDate,
          top: receiptStartDate === yyyMM ? formatDate(el.receiptStartDate, 'YYYY년 MM월 DD일') : formatDate(el.receiptEndDate, 'YYYY년 MM월 DD일'),
          innerTop: `${el.licenseName} 제 ${el.testYear}년 ${el.testRound}회 필기시험 원서접수`,
          sub: sub
        };
        dates.add(receiptStartDate === yyyMM ? formatDate(el.receiptStartDate, 'YYYY-MM-DD') : formatDate(el.receiptEndDate, 'YYYY-MM-DD'));
        receiptList.push(data);
      }

      if (writeStartDate === yyyMM || writeEndDate === yyyMM) {
        const data = {
          date: writeStartDate === yyyMM ? el.writeStartDate : el.writeEndDate,
          top: writeStartDate === yyyMM ? formatDate(el.writeStartDate, 'YYYY년 MM월 DD일') : formatDate(el.writeEndDate, 'YYYY년 MM월 DD일'),
          innerTop: `${el.licenseName} 제 ${el.testYear}년 ${el.testRound}회 필기시험`,
          sub: [{ innerMain: `해당기간 ${formatDate(el.writeStartDate, 'YYYY년 MM월 DD일')} ~ ${formatDate(el.writeEndDate, 'YYYY년 MM월 DD일')}` }]
        };
        dates.add(writeStartDate === yyyMM ? formatDate(el.writeStartDate, 'YYYY-MM-DD') : formatDate(el.writeEndDate, 'YYYY-MM-DD'));
        writeList.push(data);
      }

      if (successDate === yyyMM) {
        const data = {
          date: el.successDate,
          top: formatDate(el.successDate, 'YYYY년 MM월 DD일'),
          innerTop: `${el.licenseName} 제 ${el.testYear}년 ${el.testRound}회 합격자 발표`,
          sub: [{ innerMain: `해당기간 ${formatDate(el.successDate, 'YYYY년 MM월 DD일')} ~ ${formatDate(el.successDate, 'YYYY년 MM월 DD일')}` }]
        };
        dates.add(el.successDate);
        dates.add(formatDate(el.successDate, 'YYYY-MM-DD'));
        successList.push(data);
      }
    });

    const uniqueDates = [...dates];

    const markedDates = uniqueDates.reduce((obj: any, date) => {
      obj[date] = {
        periods: [{ startingDay: true, endingDay: true, color: 'red' }],
      };
      return obj;
    }, {});

    const data = [...receiptList, ...writeList, ...successList].sort((a, b) => {     
      return new Date(formatDate(a.date, 'YYYY/MM/DD')).getTime() - new Date(formatDate(b.date, 'YYYY/MM/DD')).getTime();
    });

    setMarkedDates(markedDates);
    setData(data);
  };

  //TODO: 월달력 클릭시 이벤트
  // const selectedDay = (day: any) => {
  //   const containsDay = data.some(obj => obj?.date === day.dateString);

  //   if (day.dateString != prevMarkPoint && day.dateString != toDay) {
  //     if (containsDay) {
  //       setMarkedDates((prevMarkedDamarkedDates: any) => ({
  //         ...prevMarkedDamarkedDates,
  //         [day.dateString]: {
  //           ...prevMarkedDamarkedDates[day.dateString],
  //           selected: true,
  //           marked: true,
  //           selectedColor: '#1E8AF3',
  //         },
  //       }));
  //     } else {
  //       setMarkedDates({
  //         ...markedDates,
  //         [day.dateString]: {
  //           selected: true,
  //           marked: true,
  //           selectedColor: '#1E8AF3',
  //         },
  //       });
  //     }
  //   }
  //   const updatedMarkedDamarkedDates: any = { ...markedDates };

  //   if (prevMarkPoint && prevMarkPoint != toDay) {
  //     delete updatedMarkedDamarkedDates[prevMarkPoint].selected;
  //     delete updatedMarkedDamarkedDates[prevMarkPoint].marked;
  //     delete updatedMarkedDamarkedDates[prevMarkPoint].selectedColor;
  //     //   setMarkedDates(updatedMarkedDamarkedDates);
  //   }
  //   if (day.dateString != prevMarkPoint) {
  //     setPrevMarkPoint(day.dateString);
  //   } else {
  //     setPrevMarkPoint('');
  //   }
  // };

  const handlePressLeft = () => {
    if (year) {
      let _year = String(Number(year) - 1)
      setYear(_year);
    }
  };

  const handlePressRight = () => {
    if (year) {
      let _year = String(Number(year) + 1)
      setYear(_year);
    }
  };

  const onMonthChange = (el: any) => {
    setYear(formatDate(el.dateString, 'YYYY'));
    setMonth(formatDate(el.dateString, 'MM'));
  };

  const checkDateLine = (el: any) => {
    return data.some((obj: any) => obj?.date === el);
  };

  const ExternalLinkText = ({ url, style }: any) => {
    const handleLinkPress = async () => {
      // URL 열기 시도
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        console.error("Couldn't open the URL:", url);
      }
    };
    return (
      <View style={{ flexDirection: 'row' }} >
        <Text style={style}>{`기술자격 종목 별 상세 일정은 `}</Text>
        <TouchableOpacity onPress={handleLinkPress}>
          <Text style={{ ...style, textDecorationLine: 'underline' }}>{`Q-net `}</Text>
        </TouchableOpacity>
        <Text style={style}>{`시험일정에서 확인해주세요.`}</Text>
      </View>
    );
  };

  useEffect(() => {
    // console.log("year=======>", year, "month======>", month)
    refetch();
  }, [year, month])

  const renderCustomHeader = (date: any) => {
    const header = date.toString('MM yyyy');
    const [month, year] = header.split(' ');
    const textStyle: TextStyle = {
      fontSize: 18,
      fontWeight: 'bold',
      // color: '#5E60CE',
      paddingRight: 5
    };

    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[textStyle]}>{`${year}년${month}월`}</Text>
        <TouchableOpacity onPress={() => setCalType('Y')} style={[scStyles.btnMonth]}>
          <Text style={scStyles.btnTxt}>년</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={scStyles.container}>
      {calType === 'M' ? (
        <View style={scStyles.monthContainer}>
          {/* <TouchableOpacity onPress={() => setCalType('Y')} style={scStyles.btn}>
            <Text style={scStyles.btnTxt}>년</Text>
          </TouchableOpacity> */}
          {markedDates && (
            <CalendarList
              renderHeader={renderCustomHeader}
              theme={{
                'stylesheet.calendar.header': {
                  dayTextAtIndex0: { color: 'red', },
                  dayTextAtIndex6: { color: 'blue', },
                },
                arrowColor: 'gray',
              }}
              hideArrows={false}
              horizontal={true} // Enable horizontal scrolling, default = false
              pagingEnabled={true} // Enable paging on horizontal, default = false
              current={`${year}-${month}-01`}
              markingType={'multi-period'}
              markedDates={markedDates}
              style={scStyles.calendarMonth}
              monthFormat={'yyyy년 MM월'}
              onMonthChange={(date) => onMonthChange(date)}

            />
          )}
          {isFetching ? <Spinner visible={isFetching} animation='fade' /> :
            <FlatList
              style={scStyles.monthScroll}
              keyExtractor={(item, index) => index.toString()} // 각 아이템의 고유 키 지정
              initialNumToRender={12}
              contentContainerStyle={{ flexGrow: 1 }}
              ListHeaderComponent={
                <ExternalLinkText url="https://www.q-net.or.kr/man001.do?imYn=Y&gSite=Q" style={{ color: '#6D8499', fontSize: 11, fontWeight: '400' }} />
              }
              data={data}
              renderItem={({ item, index }) => (
                <View style={scStyles.renderItem} >
                  <Text style={scStyles.topText}>{item.top}</Text>
                  <View>
                    <Text style={scStyles.innerTopTxt}>{item.innerTop}</Text>
                    {item.sub.map((el: any, idx: number) => (
                      <Text style={scStyles.innerMainTxt} key={idx}>{`${el.innerMain}`}</Text>
                    ))}
                  </View>
                </View>
              )}
            />
          }

        </View>
      ) : (
        <View style={scStyles.monthContainer}>
          {/* <Button title="년" color="#F3BF06" /> */}
          <CalendarHeader
            title={year + '년'} // 헤더 타이틀
            onPressLeft={handlePressLeft}
            onPressRight={handlePressRight}
          />
          <TouchableOpacity onPress={() => setCalType('M')} style={scStyles.btn}>
            <Text style={scStyles.btnTxt}>월</Text>
          </TouchableOpacity>

          <View style={scStyles.containerYear}>
            <View style={scStyles.row}>
              {fullMonth.map((month: any, idx: number) => {
                return (
                  <TouchableOpacity
                    style={scStyles.yearCalBtn}
                    onPress={() => {
                      setCalType('M');
                      setYear(year)
                      setMonth(month);
                    }}
                    key={idx}>
                    <Calendar
                      style={scStyles.calendarYear}
                      theme={{
                        'stylesheet.calendar.header': {
                          dayTextAtIndex0: { color: 'red' },
                          dayTextAtIndex6: { color: 'blue' },
                          monthText: {
                            fontSize: 10,
                            margin: -5,
                          },
                        },
                        arrowColor: 'gray',
                        textDayFontSize: 5,
                        textMonthFontSize: 10,
                        textDayHeaderFontSize: 7,
                      }}
                      monthFormat={'MM' + '월'}
                      hideArrows={true}
                      current={`${year}-${month}-01`}
                      key={`${year}-${month}-01`}
                      hideExtraDays={true}
                      dayComponent={({ date, state }) => {
                        return (
                          <View style={scStyles.day}>
                            <Text
                              style={[
                                {
                                  fontSize: 5,
                                },
                                checkDateLine(date?.dateString) && {
                                  //   backgroundColor: '#FF452C',
                                  borderBottomColor: '#FF452C',
                                  borderBottomWidth: 1.5,
                                  borderRadius: 0.5,
                                },
                                toDay == date?.dateString && {
                                  width: 7,
                                  height: 7,
                                  borderRadius: 3.5,
                                  backgroundColor: '#A5B8CB',
                                  color: 'white',
                                },
                              ]}>
                              {date?.day}
                            </Text>
                          </View>
                        );
                      }}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      )}
    </View>
  );
};



export default ScheduleScreen;
