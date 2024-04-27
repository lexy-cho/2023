import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

import CustomTimerAddScreen from './screens/CustomTimerAddScreen';
import CustomTimerScreen from './screens/CustomTimerScreen';
import ErrorScreen from './screens/ErrorScreen';
import LicenseTimerScreen from './screens/LicenseTimerScreen';
import MainScreen from './screens/MainScreen';
import MoreScreen from './screens/MoreScreen';
import NoticeScreen from './screens/NoticeScreen';
import PolicyScreen from './screens/PolicyScreen';
import PushScreen from './screens/PushScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import SearchLicense from './screens/SearchLicenseScreen';
import SettingScreen from './screens/SettingScreen';
import UseHistoryScreen from './screens/UseHistoryScreen';

// import DigitalClockTimer from './screens/DigitalClockTimer';

import { StyleSheet } from 'react-native';
import { navigationRef } from './RootNavigation';
import { IC_3DOT, IC_3DOT_FILL, IC_CALENDAR, IC_CALENDAR_FILL, IC_HOME, IC_HOME_FILL, IC_SETTING, IC_SETTING_FILL } from './assets/images';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation: React.FC = () => {
  const MainTabScreen = () => {
    return (
      <Tab.Navigator
        backBehavior="initialRoute"
        initialRouteName="MainScreen"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: { height: 70, paddingTop: 14, paddingBottom: 14 },
        }}>
        <Tab.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            tabBarLabel: '메인',
            unmountOnBlur: true,
            tabBarLabelStyle: { height: 20, paddingTop: 2, fontSize: 14 },
            tabBarIcon: ({ focused }) => {
              return (
                <Image style={styles.tabIconSize} source={focused ? IC_HOME_FILL : IC_HOME} />
              );
            },
          }}
        />
        <Tab.Screen
          name="ScheduleCalendar"
          component={ScheduleScreen}
          options={{
            tabBarLabel: '시험일정',
            unmountOnBlur: true,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={focused ? IC_CALENDAR_FILL : IC_CALENDAR}
                  style={styles.tabIconSize}
                />
              );
            },
            tabBarLabelStyle: { height: 20, paddingTop: 2, fontSize: 14 },
          }}
        />
        <Tab.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{
            tabBarLabel: '설정',
            unmountOnBlur: true,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={focused ? IC_SETTING_FILL : IC_SETTING}
                  style={styles.tabIconSize}
                />
              );
            },
            tabBarLabelStyle: { height: 20, paddingTop: 2, fontSize: 14 },
          }}
        />
        <Tab.Screen
          name="MoreScreen"
          component={MoreScreen}
          options={{
            tabBarLabel: '더보기',
            unmountOnBlur: true,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={focused ? IC_3DOT_FILL : IC_3DOT}
                  style={styles.tabIconSize}
                />
              );
            },
            tabBarLabelStyle: { height: 20, paddingTop: 2, fontSize: 14 },
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // headerBackTitleVisible: true, //Ios 뒤로가기 버튼에서도 타이틀이 보이지 않게 함
          // headerLeft: HeaderLeftButton,  //헤더 왼쪽 버튼 뒤로가기 기능
        }}>
        <Stack.Screen
          name="Home"
          component={MainTabScreen}
        />
        <Stack.Screen
          name="CustomTimer"
          component={CustomTimerScreen}
        />
        <Stack.Screen
          name="LicenseTimer"
          component={LicenseTimerScreen}
        />
        <Stack.Screen
          name="SearchLicense"
          component={SearchLicense}
        />
        <Stack.Screen
          name="CustomTimerAdd"
          component={CustomTimerAddScreen}
        />
        <Stack.Screen
          name="UseHistory"
          component={UseHistoryScreen}
        />
        <Stack.Screen
          name="Notice"
          component={NoticeScreen}
        />
        <Stack.Screen
          name="Push"
          component={PushScreen}
        />
        <Stack.Screen
          name="Policy"
          component={PolicyScreen}
        />
        <Stack.Screen
          name="Error"
          component={ErrorScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabIconSize: {
    width: 18,
    height: 18,
  },
});

export default Navigation;
