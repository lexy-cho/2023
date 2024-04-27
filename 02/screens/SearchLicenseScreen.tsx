import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { sStyles, styles } from '../assets/styles';
import { TextInput } from 'react-native-gesture-handler';
import { useMutation, useQuery } from 'react-query';
import { licenseApi, mainApi, settingApi } from '../apis';
import { BTN_PREV, IC_RESET, IC_TIMER_PLAY } from '../assets/images';
import { useAppContext } from '../contexts';
import PopupModal from "../components/PopupModal";

type HomeScreenProps = NativeStackScreenProps<ParamListBase, "Home">;

const SearchLicenseScreen: React.FC = ({ navigation }: HomeScreenProps) => {
    const { userInfo, setUserInfo } = useAppContext();
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [seq, setSeq] = useState<string>('');
    const [seq2, setSeq2] = useState<string>('');
    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

    const toggleModal = () => {
        setModalIsVisible(!modalIsVisible);
    };

    const getRecommends = async () => {
        const response: any = await licenseApi.getRecommends({});
        if (response.statusCode === 200) return response.data.list;
    }

    const getLicenses = async () => {
        const params = { searchKeyword, memSeq: userInfo.memSeq };
        const response: any = await licenseApi.getLicenses(params);
        if (response.statusCode === 200) return response.data.list;
    }

    const { data: recommendList } = useQuery<any[]>('recommends', getRecommends);
    const { data: licenseList, refetch } = useQuery<any[]>(['licenses', searchKeyword], getLicenses, { enabled: !!searchKeyword, staleTime:0, cacheTime:0 });

    const onMoveLicenseTimer = (seq: string, seq2: string) => {
        // console.log(":onMoveLicenseTimer", seq, seq2)
        if (userInfo.broadcastFlag === 'Y' && seq && seq2) {
            navigation.replace('LicenseTimer', { licenseSeq: seq, testSeq: seq2, isSkip: false });
        } else {
            setSeq(seq);
            setSeq2(seq2);
            toggleModal();
        }
    }

    const onHandleSkip = (isSkip: boolean) => {
        // console.log("onHandleSkip=====>", type, seq);
        navigation.replace('LicenseTimer', { licenseSeq: seq, testSeq: seq2, isSkip: isSkip });
        toggleModal();
    }

    const onHandleDismiss = () => {
        setSeq('');
        setSeq2('');
        toggleModal();
    }

    const saveSetting = async () => {
        // const memSeq = await storage.getItem(AUTH.USER_INFO);
        // const memSeq = userInfo.memSeq;
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
            onHandleSkip(false);
            toggleModal();
        },
        // onSettled: (data: any) => {
        //   console.log("end");
        // }
    });

    const LicenseText = ({ text }: any) => {
        const index = text.lastIndexOf(searchKeyword);
        const end = text.length;
        const contentBefore = index !== -1 ? text.slice(0, index) : '';
        const contentKeyword = index !== -1 ? text.slice(index, end) : '';

        return (
            <Text style={sStyles.keyChoiceTxt}>
                {contentBefore}
                <Text style={sStyles.keyChoiceTxtStrong}>{contentKeyword}</Text>
            </Text>
        );
    }

    const LicenseItem = ({ item }: any) => {
        const [visible, setVisible] = useState<boolean>(item.selected || false);

        const saveLicense = (licenseSeq: string, type: string) => {
            // console.log("saveLicense=================>", licenseSeq, type)
            licenseMutation.mutate({ memSeq: userInfo.memSeq, licenseSeq, type });
        }

        const licenseMutation = useMutation(mainApi.postLicense, {
            // onMutate: variable => {
            //     // console.log("onMutate", variable);
            // },
            onError: (error, variable, context) => {
                console.log("error", error, variable, context)
            },
            onSuccess: ({ data }: any, variables, context) => {
                // console.log("success", data, variables, context);
                if (variables.type === 'saveAndMove') onMoveLicenseTimer(data.licenseSeq, data.testSeq);
                else item.testSeq = data.testSeq;
                // refetch();
            },
            // onSettled: (data: any) => {
            //     console.log("end");
            // }
        });

        const customAlert = (licenseSeq: string, testSeq: string, selected: boolean) =>
            Alert.alert('', '바로 타이머로 이동하시겠습니까?', [
                { text: '취소', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: '확인', onPress: () => {
                        if (selected) {
                            // console.log("if selected", licenseSeq, testSeq)
                            onMoveLicenseTimer(licenseSeq, testSeq);
                        } else {
                            // console.log("else selected", licenseSeq, testSeq)
                            setVisible(true);
                            saveLicense(licenseSeq, 'saveAndMove');
                        }
                    }
                },
            ]);

        return (
            <View style={visible ? [sStyles.keyItem, sStyles.keyItemSelect] : sStyles.keyItem}>
                <Pressable style={sStyles.keyChoice}
                    onPress={() => {
                        if (!visible) {
                            setVisible(true);
                            saveLicense(item.licenseSeq, 'save');
                            item.selected = true;
                            return
                        }
                    }}>
                    <LicenseText text={item.licenseName} />
                </Pressable>
                <Pressable style={sStyles.btnTPlay} onPress={() => customAlert(item.licenseSeq, item.testSeq, item.selected )}>
                    <Image source={IC_TIMER_PLAY} style={sStyles.icBtnTPlay} />
                </Pressable>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.subHeader}>
                <Pressable onPress={() => navigation.navigate('MainScreen')} style={styles.btnPrev}>
                    <Image source={BTN_PREV} style={styles.icBtnPrev} />
                </Pressable>
                <View style={sStyles.search}>
                    <TextInput style={sStyles.seachIn} placeholder="검색어를 입력해주세요." defaultValue={searchKeyword} onChangeText={(text) => setSearchKeyword(text)} />
                    <Pressable style={sStyles.btnReset} onPress={() => setSearchKeyword('')}>
                        <Image source={IC_RESET} style={sStyles.icBtnReset} />
                    </Pressable>
                </View>
            </View>
            <FlatList
                style={[styles.subScroll, sStyles.seachScroll]}
                data={licenseList}
                keyExtractor={(item, index) => item.licenseSeq || index.toString()} // 각 아이템의 고유 키 지정
                renderItem={({ item, index }) => <LicenseItem item={item} />}
                ListEmptyComponent={() => (
                    <View>
                        <Text style={sStyles.bestTit}>추천 검색어</Text>
                        <View style={sStyles.bestKeyList}>
                            {recommendList && recommendList.map((el) => {
                                return (
                                    <TouchableOpacity style={sStyles.bestKey} key={el.testSeq} onPress={() => setSearchKeyword(el.licenseName)}>
                                        <Text style={sStyles.bestKeyTxt}>{el.licenseName}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </View>
                )}
            />

            <PopupModal
                visible={modalIsVisible}
                title={"스이트 타이머는 \n 안내방송을 포함하고 있습니다."}
                message={"진동모드를 해제한 후 \n 이용해주시기 바랍니다."}
                subMessage={"안내방송 없이 사용을 원하는 경우 \n 하단의 방송 SKIP 버튼을 선택해주세요."}
                cancelTitle={"방송 SKIP"}
                onCancel={() => onHandleSkip(true)}
                onConfirm={() => saveSetting()}
                onDismiss={() => onHandleDismiss()}
            />
        </View>
    );
};

export default SearchLicenseScreen;
