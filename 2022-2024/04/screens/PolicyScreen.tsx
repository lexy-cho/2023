import React, { useRef, useState } from 'react';
import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Dimensions, FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native';
import { styles, sStyles } from '../assets/styles';
import { BTN_PREV } from '../assets/images';
import { ScrollToTopButton } from '../components';


type MoreScreenProps = NativeStackScreenProps<ParamListBase, "MoreScreen">;

const Policy: React.FC = ({ navigation }: MoreScreenProps) => {

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

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Pressable onPress={() => navigation.navigate('MoreScreen')} style={styles.btnPrev}>
          <Image source={BTN_PREV} style={styles.icBtnPrev} />
        </Pressable>
        <Text style={styles.subTit}>개인정보취급방침</Text>
      </View>
      <FlatList
        ref={flatListRef}
        style={styles.subScroll}
        data={null}
        onScroll={handleScroll} //top button 
        scrollEventThrottle={16} //top button
        renderItem={null}
        ListEmptyComponent={() => (
          <View>
            <Text>{`1. 총칙
① 개인정보란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 이메일 주소 등의 사항에 의하여 당해 개인을 식별할 수 있는 정보(당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함합니다)를 말합니다.
② 스이트(은)는 (이하 '회사'라 칭함) 귀하의 개인정보보호를 매우 중요시하며, 『정보통신망이용촉진및정보보호에관한법률』상의 개인정보보호규정 및 정보통신부가 제정한 『개인정보보호지침』을 준수하고 있습니다. 회사(은)는 개인정보 처리방침을 통하여 귀하께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
③ 회사(은)는 개인정보 처리방침을 ‘도움말’ 메뉴 내에 공개함으로써 귀하께서 언제나 보실 수 있도록 조치하고 있습니다.
④ 회사(은)는 개인정보 처리방침의 지속적인 개선을 위하여 개인정보 처리방침을 개정하는데 필요한 절차를 정하고 있습니다.
`}</Text>
          </View>
        )}
      />
      {showScrollButton && <ScrollToTopButton flatListRef={flatListRef} />}
    </View>
  );
};

export default Policy;
