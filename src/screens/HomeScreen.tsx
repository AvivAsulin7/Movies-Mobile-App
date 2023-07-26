import {
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Switch,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../components/reusable-components/Text';
import {GS} from '../theme/globalStyle';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
} from 'react-native-heroicons/outline';
import TrendingMovies from '../components/TrendingMovies';
import MoviesList from '../components/MoviesList';
import {useDispatch, useSelector} from 'react-redux';
import {Theme} from '../global_state/constants';
import Loading from '../components/Loading';
import {endpoints} from '../api/api';
import {useApiRequest} from '../hooks/useApiRequest';
import {HomeNavigationProps, ScreensNames} from '../root/types';
import {MoviesType} from '../types/types';
import {switch_to_dark, switch_to_light} from '../global_state/actions';
import {AppReducerType} from '../global_state/types';

const HomeScreen: React.FC<HomeNavigationProps> = ({navigation}) => {
  const [trending, setTrending] = useState<MoviesType[]>([]);
  const [upcoming, setUpcoming] = useState<MoviesType[]>([]);
  const [topRated, setTopRated] = useState<MoviesType[]>([]);
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const {loading, error, sendRequest} = useApiRequest();

  const theme = useSelector<AppReducerType>(
    state => state.AppReducer.theme,
  ) as any;

  const dispatch = useDispatch();

  const changeTheme = (value: boolean) => {
    setIsEnabled(value);
    if (value === true) dispatch(switch_to_light(Theme.LIGHT));
    else dispatch(switch_to_dark(Theme.DARK));
  };

  const navigateToMovie = (item: MoviesType) => {
    navigation.push(ScreensNames.MOVIE, {item});
  };

  useEffect(() => {
    const getMovies = async () => {
      let data;
      try {
        data = await sendRequest({url: endpoints.trendingMovies});

        if (data && data.results) setTrending(data.results);
        data = await sendRequest({url: endpoints.upcomingMovies});

        if (data && data.results) setUpcoming(data.results);
        data = await sendRequest({url: endpoints.topRatedMovies});

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
        <View style={[GS.row, GS.justifyEnd, GS.margin1]}>
          <MoonIcon
            size="22"
            color={theme.SecondaryText}
            strokeWidth={2}
            style={GS.margin1}
          />

          <Switch
            value={isEnabled}
            onValueChange={value => changeTheme(value)}
          />
          <SunIcon
            size="25"
            color={theme.SecondaryText}
            strokeWidth={2}
            style={GS.margin1}
          />
        </View>
      </SafeAreaView>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={GS.paddingBottom8}>
          <TrendingMovies data={trending} navigateToMovie={navigateToMovie} />
          <MoviesList
            title="Upcoming"
            data={upcoming}
            navigateToMovie={navigateToMovie}
          />
          <MoviesList
            title="Top Rated"
            data={topRated}
            navigateToMovie={navigateToMovie}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default HomeScreen;
