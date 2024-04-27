import { View } from 'react-native';
import { Circle, Image, Line, Svg, Text } from 'react-native-svg';
import { IMG_CLOCK } from '../assets/images';
import { sStyles } from '../assets/styles';

interface ClockProps {
    size: number;
    currentHour: number;
    currentMinute: number;
    currentSecond: number;
}

const Clock: React.FC<ClockProps> = ({ size, currentHour, currentMinute, currentSecond }) => {
    // console.log("Clock", currentHour, currentMinute, currentSecond)
    const radius = size / 2;

    const hour = currentHour;
    const minute = currentMinute;
    const second = currentSecond;

    const hourAngle = (hour % 12) * 30 + minute * 0.5;
    const minuteAngle = minute * 6 + second * 0.1;
    const secondAngle = second * 6;

    return (
        <View style={sStyles.analogTimerBack}>
            <View style={{ height: size, width: size }}>
                <Svg height={size} width={size}>
                    {/* <Circle
                        cx={radius}
                        cy={radius}
                        r={radius - 10}
                        fill="transparent"
                        stroke="black"
                        strokeWidth="8"
                    /> */}
                    {/* 시계 이미지 추가 */}
                    <Image
                        href={IMG_CLOCK} // 시계 이미지 경로로 수정 
                        x={radius - size / 2}
                        y={radius - size / 2}
                        width={size}
                        height={size}
                    />
                    {/* 시계 바늘들 추가 */}
                    <Line
                        x1={radius}
                        y1={radius}
                        x2={radius + (radius - 25) * Math.sin((hourAngle * Math.PI) / 180)}
                        y2={radius - (radius - 25) * Math.cos((hourAngle * Math.PI) / 180)}
                        stroke="black"
                        strokeWidth="6"
                    />
                    <Line
                        x1={radius}
                        y1={radius}
                        x2={radius + (radius - 15) * Math.sin((minuteAngle * Math.PI) / 180)}
                        y2={radius - (radius - 15) * Math.cos((minuteAngle * Math.PI) / 180)}
                        stroke="black"
                        strokeWidth="4"
                    />
                    <Line
                        x1={radius}
                        y1={radius}
                        x2={radius + (radius - 20) * Math.sin((secondAngle * Math.PI) / 180)}
                        y2={radius - (radius - 20) * Math.cos((secondAngle * Math.PI) / 180)}
                        stroke="red"
                        strokeWidth="2"
                    />
                </Svg>
            </View>
        </View>

    );
}

export default Clock;