
import { StyleSheet } from 'react-native';

const sStyles = StyleSheet.create({
    search: {
        position: 'relative', height: 60, paddingTop: 8, paddingBottom: 8, paddingLeft: 30,
    },
    seachIn: {
        width: '100%', height: '100%', paddingLeft: 20, borderRadius: 50, backgroundColor: '#F0F0F0'
    },
    btnReset: {
        position: 'absolute', right: 18, top: 18, zIndex: 5, width: 22, height: 22, borderWidth: 1, borderColor: '#dddddd', borderRadius: 20,
    },
    icBtnReset: {
        width: 20, height: 20
    },
    seachScroll: {
        paddingLeft: 0, paddingRight: 0
    }, // 검색 상단 및 기본

    bestTit: {
        fontWeight: 'bold', paddingLeft: 20, paddingRight: 20, paddingTop: 18, paddingBottom: 14,
    },
    bestKeyList: {
        flexDirection: 'row', paddingLeft: 17, paddingRight: 20,
    },
    bestKey: {
        marginLeft: 3, marginRight: 3
    },
    bestKeyTxt: {
        width: 'auto', height: 33, paddingTop: 6, paddingLeft: 14, paddingRight: 10, paddingBottom: 0, borderRadius: 15, borderWidth: 1, borderColor: '#ddd',
    }, // 많이 찾는 자격증

    keyList: {
        paddingTop: 5,
    },
    keyItem: {
        position: 'relative', paddingLeft: 20, paddingRight: 20, paddingTop: 14, paddingBottom: 14,
    },
    keyItemSelect: {
        backgroundColor: '#E7F1FB'
    },
    keyChoice: {
        paddingRight: 60,
    },
    keyChoiceTxt: {

    },
    keyChoiceTxtStrong: {
        color: '#1E8AF3'
    },
    btnTPlay: {
        position: 'absolute', right: 0, top: 0, bottom: 0, width: 60,
    },
    icBtnTPlay: {
        position: 'absolute', left: '50%', top: '50%', width: 20, height: 20, marginTop: -10, marginLeft: -10
    }, // 검색결과

    cTTimeInputBack: {
        paddingTop: 20,
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
    },
    cTTit: {
        fontSize: 16,
    },
    cTName: {
        borderBottomWidth: 2,
        borderBottomColor: '#1E8AF3',
    },
    cTTimeInputArea: {
        flexDirection: 'row',
        paddingBottom: 7,
        textAlign: 'right',
        alignItems: 'center',
    },
    cTTimeInput: {
        width: 42,
        fontSize: 26,
        textAlign: 'center',
    },
    CTlabel1: {
        paddingLeft: 10,
        fontSize: 16,
    },
    CTlabel2: {
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: -5,
        fontSize: 30,
    },
    cTinfo: {
        paddingTop: 12,
        color: '#999'
    }, // 타이머 만들기

    digitalTimer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 16,
        backgroundColor: '#F8F8F8'
    },
    digitalTimerTxt: {
        lineHeight: 22,
    },
    dTLine: {
        padding: 5,
        fontSize: 12,
        color: '#D9D9D9'
    },
    dTBlue: {
        color: '#243E7E',
    },
    dTRed: {
        color: '#F33F3F'
    },
    ic_mic: {
        width: 32,
        height: 32,
    },
    analogTimerBack: {
        padding: 26,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img_clockSample: {
        width: 202,
        height: 202,
        alignSelf: 'center'
    },
    classTimeInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        borderRadius: 20,
        marginBottom: 18,
        minWidth: 154,
        height: 32,
        paddingLeft: 12,
        paddingRight: 12,
        borderWidth: 1,
        borderColor: '#bbb'
    },
    cTIOn: {
        color: '#1E8AF3',
        marginLeft: 12,
        marginRight: 12,
    },
    cTIOff: {
        color: '#bbb',
        marginLeft: 12,
        marginRight: 12,
    },
    timeInfoBack: {
    },
    tIMain: {
        alignSelf: 'center',
        textAlign: 'center',
        color: '#24232A',
        fontSize: 20
    },
    tIMainStronf: {
        color: '#1E8AF3',
    },
    tISub: {
        paddingTop: 18,
        alignSelf: 'center',
        textAlign: 'center',
        color: '#243E7E',
        lineHeight: 22,
    },
    tIEtc: {
        paddingTop: 18,
        alignSelf: 'center',
        textAlign: 'center',
        color: '#24232A',
        fontWeight: '100',
        lineHeight: 22,
    },
    tIOver: {
        paddingTop: 18,
        alignSelf: 'center',
        textAlign: 'center',
        color: '#243E7E',
        fontSize: 20

    },
    timerBtn: {
        width: '100%',
        padding: 20
    },
    tBBasic: {
        //width: '100%',
        height: 46,
        paddingTop: 12,
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#1E8AF3',
        backgroundColor: '#fff'
    },
    tBBasicBg: {
        backgroundColor: '#1E8AF3'
    },
    tBWhite: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 15,
    },
    tBBLue: {
        color: '#1E8AF3',
        alignSelf: 'center',
        fontSize: 15,
    },
    tBGoMain: {
        paddingTop: 14,
        paddingBottom: 14,
        alignItems: 'center',
        textAlign: 'center',
    },
    tBGoMainTxt: {
        color: '#666',
        borderBottomWidth: 1,
        borderBottomColor: '#999',
    },
    timerBtnTwinBack: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tBTwin: {
        width: '48%',
    },
    // 타이머상세

    setList: {
        marginTop: 18,
        borderTopWidth: 1,
        borderTopColor: '#dddddd',
    },
    setRow: {
        paddingTop: 18,
        paddingBottom: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
    },
    setTit: {
        fontSize: 15,
        color: '#222',
    },
    etcInfo: {
        paddingTop: 4,
        fontSize: 12,
        color: '#999999',
    },
    icARight: {
        width: 18,
        height: 18
    },
    dataTxt: {
        fontSize: 15,
    },
    //setListRow 

    historyList: {
        paddingBottom: 50
    },
    btnAllTrash: {
        position: 'absolute',
        right: 10,
        top: 17,
        zIndex: 10,
        width: 26,
        height: 26,
        justifyContent: 'center',
    },
    icBtnAT: {
        width: 18,
        height: 20,
        alignSelf: 'center'
    },
    historyRow: {
        position: 'relative',
        width: '100%',
        padding: 14,
        marginBottom: 12,
        backgroundColor: '#F8F8F8',
    },
    btnHTrash: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 32,
        height: 32,
        justifyContent: 'center',
    },
    icBtnHT: {
        width: 18,
        height: 18,
        alignSelf: 'center'
    },
    hDate: {
        fontSize: 13,
        color: '#666666',
        paddingBottom: 5,
    },
    hSound: {
        width: 10,
        height: 12,
    },
    hLicenseName: {
        fontSize: 15,
        color: '#222'
    },
    historyTime: {
        fontSize: 15,
        color: '#1E8AF3'
    },
    multyClassHistory: {
        fontSize: 11,
        paddingTop: 5,
        lineHeight: 18
    },
    mutyCHTime: {
        color: '#1E8AF3',
    },
    hNone: {
        textAlign: 'center'
    },
    hNoneGo: {
        fontSize: 12,
        color: '#243E7E'
    },
    // 사용이력

    bbsList: {
        paddingBottom: 50
    },
    bbsRow: {
        paddingTop: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
    },
    bbsTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingBottom: 14,
    },
    bbsTopTxt: {
        flexGrow: 1, flexShrink: 1,
    },
    bbsOnOff: {
        flexGrow: 0, flexShrink: 0, flexBasis: 20,
    },
    icATB: {
        width: 14,
        height: 14,
        opacity: .5,
        transform: [{ rotate: '180deg' }],
        alignSelf: 'center'
    },
    icATBOn: {
        opacity: 1,
        transform: [{ rotate: '0deg' }],
    },
    bbsTit: {
        fontWeight: 'bold',
        lineHeight: 22,
    },
    bbsNew: {
        color: '#FF5959',
        fontSize: 26,
        overflow: 'hidden',
        lineHeight: 22,
    },
    bbsDate: {
        fontSize: 12,
        color: '#666',
        paddingTop: 2
    },
    bbsDetail: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#dddddd',
        backgroundColor: '#F8F8F8'
    },
    bbsImg: {
        width: '100%',
        minHeight: 300,
        marginTop: 12,
    },
    bbsNone: {
        textAlign: 'center',
        paddingBottom: 16,
    },
    bbsMore: {
        paddingTop: 26,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    bbsMoreTxt: {
        height: 20,
    },
    bbsMoreNum: {
        width: 20,
        height: 20,
        color: '#fff',
        textAlign: 'center',
        marginRight: 10,
        borderRadius: 20,
        backgroundColor: '#1E8AF3',
    } // 공지사항, 알림

});

export default sStyles;