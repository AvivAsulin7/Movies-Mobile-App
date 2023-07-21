import {View, TouchableOpacity, StatusBar, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../components/reusable-components/Text';
import {GS} from '../theme/globalStyle';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import TrendingMovies from '../components/TrendingMovies';
import MoviesList from '../components/MoviesList';
import {useSelector} from 'react-redux';
import Loading from '../components/Loading';
import {endpoints} from '../api/api';
import {useApiRequest} from '../hooks/useApiRequest';
import {useNavigation} from '@react-navigation/native';
import {ScreensNames, SearchNavigationProps} from '../root/types';
import {MoviesType} from '../types/types';

const HomeScreen = () => {
  const [trending, setTrending] = useState<MoviesType[]>([]);
  const [upcoming, setUpcoming] = useState<MoviesType[]>([]);
  const [topRated, setTopRated] = useState<MoviesType[]>([]);

  const {loading, error, sendRequest} = useApiRequest();
  const navigation = useNavigation<SearchNavigationProps>();

  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const theme = useSelector<any>(state => state.AppReducer.theme) as any;

  const handleDarkModeToggle = (value: boolean) => {
    setDarkModeEnabled(value);
    // Add your logic for toggling dark/light mode here
  };

  useEffect(() => {
    const getMovies = async () => {
      let data;
      try {
        data = await sendRequest({url: endpoints.trendingMovies});
        console.log('TRENDING: ', endpoints.trendingMovies);

        if (data && data.results) setTrending(data.results);
        data = await sendRequest({url: endpoints.upcomingMovies});
        console.log('UPCOMING: ', endpoints.upcomingMovies);

        if (data && data.results) setUpcoming(data.results);
        data = await sendRequest({url: endpoints.topRatedMovies});
        console.log('TOP RATED: ', endpoints.topRatedMovies);

        if (data && data.results) setTopRated(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return (
    <View style={[GS.flexOne, {backgroundColor: theme.PrimaryBG}]}>
      <StatusBar translucent backgroundColor="transparent" />
      <SafeAreaView style={GS.marginBottom2}>
        <View
          style={[
            GS.row,
            GS.justifySpaceBetween,
            GS.marginHorizontal0,
            GS.marginTop2,
          ]}>
          <Bars3CenterLeftIcon
            size="30"
            color={theme.SecondaryText}
            strokeWidth={2}
          />
          <Text style={[{color: theme.ThirdColor}, GS.text28, GS.bold]}>
            Movies
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(ScreensNames.SEARCH)}>
            <MagnifyingGlassIcon
              size="30"
              color={theme.SecondaryText}
              strokeWidth={2}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={GS.paddingBottom8}>
          <TrendingMovies data={trending} />
          <MoviesList title="Upcoming" data={upcoming} />
          <MoviesList title="Top Rated" data={topRated} />
        </ScrollView>
      )}
    </View>
  );
};

export default HomeScreen;
