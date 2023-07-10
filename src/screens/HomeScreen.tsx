import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {GS, Colors} from '../theme/globalStyle';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import TrendingMovies from '../components/TrendingMovies';
import MoviesList from '../components/MoviesList';

const HomeScreen = ({navigation}: any) => {
  const [trending, setTrending] = useState([1, 2, 3, 4, 5]);
  const [upcoming, setUpcoming] = useState([1, 2, 3, 4, 5]);
  const [topRated, setTopRated] = useState([1, 2, 3, 4, 5]);

  return (
    <View style={[GS.flexOne, GS.bgBlack]}>
      <SafeAreaView style={GS.marginBottom2}>
        <StatusBar barStyle="light-content" />
        <View style={[GS.row, GS.justifySpaceBetween, GS.marginLeft4]}>
          <Bars3CenterLeftIcon size="30" color="white" strokeWidth={2} />
          <Text style={[GS.white, GS.bodyBold26, GS.bold]}>Movies</Text>
          <TouchableOpacity>
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
