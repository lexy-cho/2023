
import { StyleSheet } from 'react-native';

const mStyles = StyleSheet.create({

    noLicense: {
        height: 150, width: '100%', marginBottom: -20, alignItems: 'center', borderWidth: 1, borderColor: '#1E8AF3', borderRadius: 10, backgroundColor: '#fff'
    },
    icFile: {
        width: 38, height: 22, marginTop: -11
    },
    icExit: {
        width: 16, height: 16, marginLeft: 140, marginTop: -5
    },
    icLicenseAdd: {
        height: 22, width: 22
    },
    noLicenseAdd: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    noLicenseTxt: {
        fontSize: 18, fontWeight: 'bold', marginBottom: 14
    },
    noLicenseTxtStrong: {
        color: '#1E8AF3'
    }, // end 자격증 찾아보세요

    choiceLicenseBack: {
        paddingTop: 10,
    },
    choiceLicense: {
        height: 150, width: '100%', alignItems: 'center', borderWidth: 1, borderColor: '#1E8AF3', borderRadius: 10, backgroundColor: '#fff'
    },
    cLicenseTxt: {
        fontSize: 16, paddingTop: 10
    },
    icCLicense: {
        flex:1, marginTop:-20, width:41, maxHeight: 41
    }, // end 자격증 저장 후

    bestBack: {
        width: '100%', paddingTop: 46, paddingBottom: 20
    },
    bestTit: {
        paddingTop: 10, paddingBottom: 12, color: '#6D8499', fontSize: 16, fontWeight: 'bold'
    },
    bestCol: {
        flexDirection: 'column', height: 80, width: '32%', borderWidth: 0, borderRadius: 10, backgroundColor: '#F5FAFF'
    },
    bestBtn: {
        height: 80, width: '100%', paddingTop: 15, paddingLeft: 10, paddingRight: 10, paddingBottom: 10, justifyContent: 'center'
    },
    bestLicenseName: {
        textAlign: 'center', color: '#243E7E'
    },
    bestBadge: {
        position: 'absolute', top: -4, left: 4, width: 16, height: 16
    }, // end 많이 찾는 자격증

    cTimerAdd: {
        height: 56, paddingLeft: 18, paddingRight: 16, borderWidth: 1, borderStyle: 'dashed', borderRadius: 6, borderColor: '#1E8AF3',
    },
    cTimerTit: {
        color: '#1E8AF3', fontWeight: 'bold',
    },
    icCTimerAdd: {
        width: 22, height: 22,
    },

    cTimerRow: {
        height: 56, marginBottom: 12, borderWidth: 1, borderRadius: 6, borderColor: '#1E8AF3'
    },
    cTimerGo: {
        flexGrow: 0, flexShrink: 1, flexBasis: '90%', paddingTop: 10, paddingBottom: 10, paddingLeft: 18, color: '#6D8499', lineHeight: 56,
    },
    btnExit: {
        flexGrow: 1, flexShrink: 0, flexBasis: 54, height: 40, width: 54, marginLeft: 10, alignItems: 'center',
    },
    btnExitIcon: {
        width: 16, height: 16, marginTop: 11,
    },
    cTimerListAdd: {
        marginTop: 6, paddingTop: 5, paddingBottom: 5, justifyContent: 'center'
    },
    icCTimerListAdd: {
        width: 16, height: 16, marginLeft: 6,
    },  // end 커스텀 타이머


    noticeBack: {
        paddingTop: 32
    },
    noticeBox: {
        borderTopWidth: 1, borderTopColor: '#EEEEEE', paddingTop: 17, paddingBottom: 17, flexDirection: 'row', alignItems: 'center',  // 상하 중간 정렬을 위한 스타일
    },
    noticeTit: {
        flexGrow: 1, flexShrink: 0, flexBasis: 100, color: '#6D8499'
    },
    noticeData: {
        flexGrow: 0, flexShrink: 1,
    },
    icNoticeTit: {
        width: 16, height: 16, marginRight: 10, textAlignVertical: 'top'
    } // end 공지사항
});

export default mStyles;