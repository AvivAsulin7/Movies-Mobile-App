import {
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
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
import {navigationProps} from '../types/types';

const HomeScreen = ({navigation}: navigationProps) => {
  const [trending, setTrending] = useState([1, 2, 3, 4, 5]);
  const [upcoming, setUpcoming] = useState([1, 2, 3, 4, 5]);
  const [topRated, setTopRated] = useState([1, 2, 3, 4, 5]);

  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const theme = useSelector<any>(state => state.AppReducer.theme) as any;

  const handleDarkModeToggle = (value: boolean) => {
    setDarkModeEnabled(value);
    // Add your logic for toggling dark/light mode here
  };

  return (
    <View style={[GS.flexOne, GS.bgBlack]}>
      <StatusBar translucent backgroundColor="transparent" />
      <SafeAreaView style={GS.marginBottom2}>
        <View
          style={[
            GS.row,
            GS.justifySpaceBetween,
            GS.marginHorizontal0,
            GS.marginTop2,
          ]}>
          <Bars3CenterLeftIcon size="30" color="white" strokeWidth={2} />
          <Text style={[{color: theme.ThirdColor}, GS.text28, GS.bold]}>
            Movies
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <MagnifyingGlassIcon size="30" color="white" strokeWidth={2} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={GS.paddingBottom8}>
        <TrendingMovies data={trending} />
        <MoviesList title="Upcoming" data={upcoming} />
        <MoviesList title="Top Rated" data={topRated} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
