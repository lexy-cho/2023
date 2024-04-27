
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    fRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    
    mainTop: {
        position: 'relative',
        zIndex: 2,
        width: '100%',
        alignItems: 'center',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#1E8AF3',
    },
    mainScroll: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
    },

    subHeader: {
        width: '100%',
        height: 60,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
    },
    btnPrev: {
        position: 'absolute',
        left: 10,
        top: 17,
        zIndex: 10,
        width: 26,
        height: 26,
        justifyContent: 'center'
    },
    icBtnPrev: {
        width: 16,
        height: 16,
        alignSelf: 'center'
    },
    subTit: {
        fontSize: 16,
        alignSelf: 'center'
    },
    subScroll: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
    },

    bannerArea: {
        width: '100%',
        height: 50,
        textAlign: 'center',
        lineHeight: 50,
        backgroundColor: '#f3f3f3'
    },

    must: {
        color: '#FF5959',
    },

    new: {
        color: '#FF5959',
        fontSize: 32,
        overflow: 'hidden',
        lineHeight: 28,
    },
    disabled: {
        opacity: .5
    },
    
    button: {
        width: '100%',
        padding: 20,
        height: 66,
        fontSize: 16,
        textAlign: "center"
    },
    buttons: {
        width: '50%',
        padding: 20,
        height: 66,
        fontSize: 16,
        textAlign: "center",
        justifyContent: 'center'
    },
    btnTxt: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    bgGgray: {
        backgroundColor: '#CACACA',
    },
    bgBlue: {
        backgroundColor: '#1E8AF3',
    },

});

export default styles;