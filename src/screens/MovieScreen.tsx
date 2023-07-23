import {View, StatusBar, ScrollView, Dimensions, Image} from 'react-native';
import Text from '../components/reusable-components/Text';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {GS} from '../theme/globalStyle';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import Cast from '../components/Cast';
import MoviesList from '../components/MoviesList';
import NavigateBack from '../components/NavigateBack';
import {useApiRequest} from '../hooks/useApiRequest';
import {endpoints, image500} from '../api/api';
import Loading from '../components/Loading';
import {ActorType, MovieDataType, MoviesType} from '../types/types';
import {MovieScreenRouteProp} from '../root/types';

const {width, height} = Dimensions.get('window');

const MovieScreen: React.FC = () => {
  const theme = useSelector<any>(state => state.AppReducer.theme) as any;
  const {loading, error, sendRequest} = useApiRequest();
  const [movie, setMovie] = useState<MovieDataType>();

  const detailsMovieStyle = {
    letterSpacing: 1,
    lineHeight: 20,
    marginLeft: 7,
    color: theme.PrimaryColor,
  };

  const [cast, setCast] = useState<ActorType[]>([]);
  const [SimiliarMovies, setSimilarMovies] = useState<MoviesType[]>([]);
  const {params: item} = useRoute<MovieScreenRouteProp>();

  useEffect(() => {
    const fetchDetailsMovie = async () => {
      let data, url;

      try {
        url = endpoints.movieDetails(item?.id);
        data = await sendRequest({url});
        if (data) setMovie(data);

        url = endpoints.movieCast(item?.id);

        data = await sendRequest({url});

        if (data && data.cast) setCast(data.cast);

        url = endpoints.similarMovies(item?.id);

        data = await sendRequest({url});

        if (data && data.results) setSimilarMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetailsMovie();
  }, [item]);

  return (
    <ScrollView
      contentContainerStyle={[
        {backgroundColor: theme.PrimaryBG, paddingBottom: 20},
      ]}>
      <View style={GS.fullWidth}>
        <StatusBar translucent backgroundColor="transparent" />
        <NavigateBack isAbsoluteStyle={true} />

        <View>
          <Image
            source={
              movie?.poster_path
                ? {
                    uri: image500(movie?.poster_path),
                  }
                : require('../assets/no_poster.jpeg')
            }
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

      {movie && (
        <View style={[{marginTop: -(height * 0.09)}, GS.marginTop2]}>
          <Text
            style={[
              GS.title24,
              GS.bold,
              GS.textAlignCenter,
              {letterSpacing: 1},
            ]}>
            {movie?.title}
          </Text>

          <Text
            style={[
              GS.bodyBold16,
              GS.textAlignCenter,
              detailsMovieStyle,
              GS.marginVertical1,
            ]}>
            {movie.status} • {movie?.release_date?.split('-')[0]} •{' '}
            {movie.runtime} min
          </Text>
          <View style={[GS.row, GS.justifyCenter]}>
            {movie?.genres?.map(
              (gen: {id: number; name: string}, index: number) => {
                const showBullet = index + 1 != movie.genres.length;
                return (
                  <Text key={index} style={[detailsMovieStyle]}>
                    {gen.name} {showBullet && '•'}
                  </Text>
                );
              },
            )}
          </View>
          <Text
            style={[
              GS.marginHorizontal4,
              GS.marginTop2,
              {color: theme.PrimaryColor},
            ]}>
            {movie?.overview}
          </Text>
        </View>
      )}
      <Cast cast={cast} />

      <MoviesList
        title="Similiar Movies"
        hideSeeAll={true}
        data={SimiliarMovies}
      />
    </ScrollView>
  );
};

export default MovieScreen;
