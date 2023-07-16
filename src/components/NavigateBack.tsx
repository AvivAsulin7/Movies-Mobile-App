import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {navigationProps} from '../types/types';
import React, {useEffect, useState} from 'react';
import {GS} from '../theme/globalStyle';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';

interface NavigateBackProps {
  isAbsoluteStyle?: Boolean;
}

let styleContainer = [
  GS.fullWidth,
  GS.row,
  GS.justifySpaceBetween,
  GS.marginTop4,
  GS.paddingHorizontal4,
  GS.paddingBottom4,
];

let extraStyle = [{zIndex: 20}, GS.absolute];

const NavigateBack = ({
  navigation,
  isAbsoluteStyle,
}: navigationProps & NavigateBackProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <SafeAreaView
      style={
        isAbsoluteStyle ? styleContainer.concat(extraStyle) : styleContainer
      }>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsFavorite(prev => !prev)}>
        <HeartIcon size="35" color={isFavorite ? 'red' : 'white'} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NavigateBack;
