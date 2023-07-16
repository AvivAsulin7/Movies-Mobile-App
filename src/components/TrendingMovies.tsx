import {View, TouchableOpacity, Dimensions, Image} from 'react-native';
import Text from './reusable-components/Text';
import React from 'react';
import {GS} from '../theme/globalStyle';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

type PropsMovieCard = {
  item: any;
  navigateToMovie: (item: any) => void;
};

const MovieCard = ({item, navigateToMovie}: PropsMovieCard) => {
  return (
    <TouchableOpacity onPress={() => navigateToMovie(item)}>
      <Image
        source={{
          uri: 'https://m.media-amazon.com/images/I/81Z1dBZlvOL._AC_UF1000,1000_QL80_.jpg',
        }}
        style={{
          width: width * 0.6,
          height: height * 0.4,
          borderRadius: 18,
        }}></Image>
    </TouchableOpacity>
  );
};

type Props = {
  data: Number[];
};

const TrendingMovies = ({data}: Props) => {
  const navigation = useNavigation();

  const navigateToMovie = (item: any) => {
    navigation.navigate('Movie', item);
  };

  return (
    <View style={GS.marginBottom6}>
      <Text
        style={[
          GS.bodyBold18,
          GS.marginBottom6,
          GS.marginHorizontal4,
          GS.text20,
        ]}>
        TrendingMovies
      </Text>
      <Carousel
        data={data}
        renderItem={({item}: any) => (
          <MovieCard item={item} navigateToMovie={navigateToMovie} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.5}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={[GS.displayFlex, GS.alignCenter]}
      />
    </View>
  );
};

export default TrendingMovies;
