import {View, TouchableOpacity, Dimensions, Image} from 'react-native';
import Text from './reusable-components/Text';
import React from 'react';
import {GS} from '../theme/globalStyle';
// @ts-ignore
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import {image500} from '../api/api';
import {MovieNavigationProps, ScreensNames} from '../root/types';
import {MoviesType} from '../types/types';

const {width, height} = Dimensions.get('window');

type PropsMovieCard = {
  item: MoviesType;
  navigateToMovie: (item: MoviesType) => void;
};

const MovieCard: React.FC<PropsMovieCard> = ({item, navigateToMovie}) => {
  return (
    <TouchableOpacity onPress={() => navigateToMovie(item)}>
      <Image
        source={
          item.poster_path
            ? {
                uri: image500(item.poster_path),
              }
            : require('../assets/no_poster.jpeg')
        }
        style={{
          width: width * 0.6,
          height: height * 0.4,
          borderRadius: 18,
        }}
      />
    </TouchableOpacity>
  );
};

type Props = {
  data: MoviesType[];
};

const TrendingMovies: React.FC<Props> = ({data}) => {
  const navigation = useNavigation<MovieNavigationProps>();

  const navigateToMovie = (item: MoviesType) => {
    navigation.navigate(ScreensNames.MOVIE, item);
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
        renderItem={({item}: {item: MoviesType}) => (
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
