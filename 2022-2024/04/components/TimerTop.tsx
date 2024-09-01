import { Image, Pressable, Text, View } from 'react-native';
import { IC_MIC, IC_MIC_NOTING, IC_MIC_OFF } from '../assets/images';
import { sStyles } from '../assets/styles';
import { formatTime } from '../utils/format';
import PopupModal from './PopupModal';
import { useState } from 'react';
import navigation from '../navigation';

interface ClockProps {
    broadcastFlag: string;
    isRunning: boolean;
    isSkip: boolean;
    lTime: number;
    rTime: number;
    onReset: () => void;
}
const TimerTop: React.FC<ClockProps> = ({ broadcastFlag, isRunning, isSkip, lTime, rTime, onReset }) => {
    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const toggleModal = () => {
        // console.log("broadcastFlag", broadcastFlag, "isSkip", isSkip);
        if (isSkip === true) { //broadcastFlag !== 'Y' || isSkip === true
            setMessage('안내 방송용 타이머로 변경할 경우,\n타이머는 초기화 됩니다.\n변경 하시겠습니까?');
        } else {
            setMessage('미방송용 타이머로 변경할 경우,\n타이머는 초기화 됩니다.\n변경 하시겠습니까?');
        }
        setModalIsVisible(!modalIsVisible);
    };

    const onCancel = () => {
        setModalIsVisible(!modalIsVisible);
    }

    const onConfirm = () => {
        setModalIsVisible(!modalIsVisible);
        onReset();
    }

    return (
        <View style={sStyles.digitalTimer}>
            <Text style={sStyles.digitalTimerTxt}>
                제한시간 <Text style={sStyles.dTLine}> | </Text> <Text style={sStyles.dTBlue}>{formatTime(lTime, 'HH:mm:ss')}</Text>{"\n"}
                남은시간 <Text style={sStyles.dTLine}> | </Text> <Text style={sStyles.dTRed}>{formatTime(rTime, 'HH:mm:ss')}</Text>
            </Text>
            {/* 방송음원여부 */}
            {
                broadcastFlag !== 'Y' ?
                    <Image source={IC_MIC_OFF} style={sStyles.ic_mic} />
                    :
                    isRunning ?
                        <Pressable onPress={toggleModal}>
                            <Image source={IC_MIC} style={sStyles.ic_mic} />
                        </Pressable>
                        :
                        <Pressable onPress={toggleModal}>
                            <Image source={IC_MIC_NOTING} style={sStyles.ic_mic} />
                        </Pressable>
            }
            <PopupModal
                visible={modalIsVisible}
                title={""}
                message={message}
                subMessage={""}
                confirmTitle={"확인"}
                cancelTitle={"취소"}
                onCancel={onCancel}
                onConfirm={onConfirm}
            // onDismiss={() => onHandleDismiss()}
            />
        </View>
    );
}

export default TimerTop;