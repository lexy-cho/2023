import {ParamListBase} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useRef, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import PushNotification from 'react-native-push-notification';
import Sound from 'react-native-sound';

const path = require('../assets/audios/mp3-output-ttsfree(dot)com.mp3');

let music = new Sound(path, '', error => {
  if (error) {
    console.log('play failed');
  }
});

type HomeScreenProps = NativeStackScreenProps<ParamListBase, 'Home'>;

const DigitalClockTimer: React.FC = ({navigation}: HomeScreenProps) => {
  const [time, setTime] = useState(900); //초 단위
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    console.log(time);
    if (time === 890) {
      console.log(11111111, music);
      music.play();
    }

    if (time <= 0) {
      clearInterval(intervalRef.current!);
      showNotification();
      music.stop();
    }
  }, [time]);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = BackgroundTimer.setInterval(() => {
        setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
      // music.play();
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      BackgroundTimer.clearInterval(intervalRef.current!);
      music.stop();
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    BackgroundTimer.clearInterval(intervalRef.current!);
    setTime(15 * 60);
    music.stop();
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  const showNotification = () => {
    PushNotification.localNotification({
      title: 'Timer Ended',
      message: 'Your 15-minute timer has ended!',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(time)}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={startTimer}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={stopTimer}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={resetTimer}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Tab1 Move Main "
        onPress={() => navigation.navigate('MainScreen')}
      />
      <Button
        title="Tab3 Move Tab "
        onPress={() => navigation.navigate('SettingScreen')}
      />
      <Button
        title="Tab4 Move Tab "
        onPress={() => navigation.navigate('MoreScreen')}
      />
      <Text>{'타이머 및 음원 재생 테스트용 화면'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default DigitalClockTimer;
