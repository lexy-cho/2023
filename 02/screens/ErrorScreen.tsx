import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { sStyles, styles } from '../assets/styles';
import { SUBTRACT } from "../assets/images";


type MoreScreenProps = NativeStackScreenProps<ParamListBase, "MoreScreen">;

const Error: React.FC = ({ navigation }: MoreScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
        <Image source={SUBTRACT} style={{ bottom: 20 }} />
        <Text style={{ fontSize: 20 }}>일시적인 오류가 발생하였습니다.</Text>
        <Text style={{ top: 15, fontSize: 16, color: '#243E7E', alignSelf: 'center' }}>서비스 이용에 불편을 드려 죄송합니다. {'\n'} 잠시 후 다시 이용해 주세요.</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('MainScreen')} style={{
        top: 50,
        backgroundColor: '#1E8AF3',
        width: 160,
        height: 46,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#1E8AF3',
      }}>
        <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: '500', lineHeight: 18 }} >다시 시도</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Error;
