import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {GS} from '../theme/globalStyle';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

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

let extraStyle: any = [{zIndex: 20}, GS.absolute];

const NavigateBack: React.FC<NavigateBackProps> = ({isAbsoluteStyle}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={
        isAbsoluteStyle ? styleContainer.concat(extraStyle) : styleContainer
      }>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={[GS.border1, GS.bgBlack, GS.borderRadius12]}>
          <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsFavorite(prev => !prev)}>
        <HeartIcon size="35" color={isFavorite ? 'red' : 'white'} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NavigateBack;
