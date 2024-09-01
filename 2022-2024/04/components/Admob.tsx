import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
// import { ANDROID_APP_ID, IOS_APP_ID } from '@env';

const unitID = Platform.select({ ios: 'ca-app-pub-8683936911033431/9924371375', android: 'ca-app-pub-8683936911033431/8836566704' }) || '';
// const unitID = Platform.select({ ios: IOS_APP_ID, android: ANDROID_APP_ID }) || '';
console.log("__DEV__", __DEV__, "TestIds.BANNER", TestIds.BANNER, "unitID", unitID);
const adUnitId = __DEV__ ? TestIds.BANNER : unitID;

const Admob = () => {
  return (
    <View style={styles.admob}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.FULL_BANNER}
        // size={BannerAdSize.INLINE_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  admob: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
    // height: 50,
    // textAlign: 'center',
    // lineHeight: 50,
    // backgroundColor: '#f3f3f3'
  },
});

export default Admob;