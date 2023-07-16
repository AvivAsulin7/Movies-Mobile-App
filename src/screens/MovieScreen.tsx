import {
  View,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Text from '../components/reusable-components/Text';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {GS} from '../theme/globalStyle';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import Cast from '../components/Cast';
import MoviesList from '../components/MoviesList';
import NavigateBack from '../components/NavigateBack';

type Props = {};

const {width, height} = Dimensions.get('window');

const MovieScreen = (props: Props) => {
  const theme = useSelector<any>(state => state.AppReducer.theme) as any;
  const detailsMovieStyle = {
    letterSpacing: 2,
    lineHeight: 20,
    color: theme.SecondaryColor,
  };

  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [SimiliarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);

  const {params: item} = useRoute();
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const movieName = 'Fast and furious 10';

  useEffect(() => {}, [item]);

  return (
    <ScrollView contentContainerStyle={[GS.bgBlack, {paddingBottom: 20}]}>
      <View style={GS.fullWidth}>
        <StatusBar translucent backgroundColor="transparent" />
        <NavigateBack navigation={navigation} isAbsoluteStyle={true} />
        <View>
          <Image
            source={{
              uri: 'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1669120603.jpg?c=2',
            }}
            style={{
              width,
              height: height * 0.55,
            }}
          />
          <LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
            style={[{width, height: height * 0.4, bottom: 0}, GS.absolute]}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
          />
        </View>
      </View>

      <View style={[{marginTop: -(height * 0.09)}, GS.marginTop2]}>
        <Text
          style={[GS.title24, GS.bold, GS.textAlignCenter, {letterSpacing: 1}]}>
          {movieName}
        </Text>
        <Text
          style={[
            GS.bodyBold16,
            GS.textAlignCenter,
            detailsMovieStyle,
            GS.marginVertical1,
          ]}>
          Released • 2023 • 160 min
        </Text>
        <View style={[GS.row, GS.justifyCenter]}>
          <Text style={[GS.textAlignCenter, detailsMovieStyle]}>Action •</Text>
          <Text style={[GS.textAlignCenter, detailsMovieStyle]}>Thirll •</Text>
          <Text style={[GS.textAlignCenter, detailsMovieStyle]}>Adventure</Text>
        </View>
        <Text
          style={[
            GS.marginHorizontal4,
            GS.marginTop2,
            {color: theme.SecondaryColor},
          ]}>
          Brian O'Conner, back working for the FBI in Los Angeles, teams up with
          Dominic Toretto to bring down a heroin importer by infiltrating his
          operation.{' '}
        </Text>
      </View>

      <Cast cast={cast} navigation={navigation} />
      <MoviesList
        title="Similiar Movies"
        hideSeeAll={true}
        data={SimiliarMovies}
      />
    </ScrollView>
  );
};

export default MovieScreen;
