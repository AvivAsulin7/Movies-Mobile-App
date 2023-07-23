import {SafeAreaView, Image, Dimensions, View} from 'react-native';
import React from 'react';
import {ScreensNames, SplashScreenNavigationProps} from '../root/types';
import {GS} from '../theme/globalStyle';

const {width, height} = Dimensions.get('window');

const SplashScreen = ({navigation}: SplashScreenNavigationProps) => {
  setTimeout(() => {
    navigation.navigate(ScreensNames.HOME);
  }, 5000);
  return (
    <SafeAreaView
      style={[GS.bgBlack2, GS.flexOne, GS.alignCenter, GS.justifyCenter]}>
      <Image
        source={require('../assets/logo.png')}
        style={[{width: width * 0.7, height: height * 0.5}]}></Image>
    </SafeAreaView>
  );
};

export default SplashScreen;
