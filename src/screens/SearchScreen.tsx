import {
  Dimensions,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Text from '../components/reusable-components/Text';
import {useSelector} from 'react-redux';
import {GS} from '../theme/globalStyle';
import {XMarkIcon} from 'react-native-heroicons/outline';
import {useApiRequest} from '../hooks/useApiRequest';
import {endpoints, image185} from '../api/api';
import {ScreensNames, SearchNavigationProps} from '../root/types';
import {MoviesType} from '../types/types';
import {AppReducerType} from '../global_state/types';

const {width, height} = Dimensions.get('window');

const SearchScreen: React.FC<SearchNavigationProps> = ({navigation}) => {
  const theme = useSelector<AppReducerType>(
    state => state.AppReducer.theme,
  ) as any;
  const {loading, error, sendRequest} = useApiRequest();

  const [results, setResults] = useState<MoviesType[]>([]);

  const handleSearch = async (value: string) => {
    try {
      if (value && value.length > 2) {
        const movie = {
          url: endpoints.searchMovie,
          params: {
            query: value,
            include_adult: 'false',
            language: 'en-US',
            page: '1',
          },
        };
        const data = await sendRequest(movie);

        if (data && data.results) setResults(data.results);
      } else setResults([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={[{backgroundColor: theme.PrimaryBG}, GS.flexOne]}>
      <View
        style={[
          GS.marginHorizontal4,
          GS.row,
          GS.justifySpaceBetween,
          GS.alignCenter,
          GS.baseBorder,
          GS.borderRadiusMax,
        ]}>
        <TextInput
          onChangeText={handleSearch}
          placeholder="Search movie"
          placeholderTextColor={theme.MainText}
          style={[
            GS.paddingLeft4,
            GS.paddingVerticalZero,
            GS.flexOne,
            {letterSpacing: 1, color: theme.MainText},
          ]}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(ScreensNames.HOME);
          }}
          style={[
            GS.borderRadiusMax,
            GS.padding2,
            GS.margin1,
            {backgroundColor: theme.PrimaryColor},
          ]}>
          <XMarkIcon size="25" color="white" />
        </TouchableOpacity>
      </View>

      {results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[GS.padding2]}>
          <Text style={GS.marginLeft4}> Results ({results.length}) </Text>
          <View style={[GS.row, GS.justifySpaceBetween, GS.flexWrap]}>
            {results.map((item: MoviesType, index: React.Key) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => navigation.push(ScreensNames.MOVIE, {item})}>
                  <View style={[GS.marginBottom2, GS.marginTop2, GS.margin1]}>
                    <Image
                      source={
                        item.poster_path
                          ? {
                              uri: image185(item?.poster_path),
                            }
                          : require('../assets/no_poster.jpeg')
                      }
                      style={[
                        GS.borderRadius16,
                        {width: width * 0.44, height: height * 0.3},
                      ]}
                    />

                    <Text>
                      {item?.title.length > 22
                        ? item?.title.slice(0, 22) + '...'
                        : item?.title}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View style={[GS.row, GS.justifyCenter, GS.alignCenter, GS.marginTop8]}>
          <Image
            source={{
              uri: 'https://o.remove.bg/downloads/a9851b0a-dae1-4d0d-ac1a-8651bff1dd14/c6NYERU5De-removebg-preview.png',
            }}
            style={{width: width * 0.85, height: height * 0.45}}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
