import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {GS} from '../theme/globalStyle';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';

type Props = {};

const {width, height} = Dimensions.get('window');

const MovieScreen = (props: Props) => {
  const {params: item} = useRoute();
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {}, [item]);
  return (
    <ScrollView
      contentContainerStyle={[GS.paddingBottom16, GS.bgBlack, GS.flexOne]}>
      <View style={GS.fullWidth}>
        <SafeAreaView
          style={[
            {zIndex: 20},
            GS.fullWidth,
            GS.absolute,
            GS.row,
            GS.justifySpaceBetween,
            GS.alignCenter,
            GS.marginTop2,
          ]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsFavorite(prev => !prev)}>
            <HeartIcon size="35" color={isFavorite ? 'red' : 'white'} />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={{
              uri: 'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1669120603.jpg?c=2',
            }}
            style={{
              width,
              height: height * 0.5,
            }}></Image>
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
