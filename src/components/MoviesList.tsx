import {
  View,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from 'react-native';
import Text from './reusable-components/Text';
import React from 'react';
import {GS} from '../theme/globalStyle';
import {useNavigation} from '@react-navigation/native';
import {image185} from '../api/api';
import {useSelector} from 'react-redux';
import {MovieNavigationProps, ScreensNames} from '../root/types';
import {MoviesType} from '../types/types';
// @ts-ignore
import {no_poster} from '../assets/no_poster.jpeg';

const titleStyle = [GS.bodyBold18, GS.text20];

type Props = {
  title: String;
  data: MoviesType[];
  hideSeeAll?: Boolean;
};

const {width, height} = Dimensions.get('window');

const MoviesList = ({title, data, hideSeeAll}: Props) => {
  const theme = useSelector<any>(state => state.AppReducer.theme) as any;

  const navigation = useNavigation<MovieNavigationProps>();

  return (
    <View style={GS.marginBottom4}>
      <View
        style={[
          GS.row,
          GS.justifySpaceBetween,
          GS.alignCenter,
          GS.marginHorizontal4,
        ]}>
        <Text style={titleStyle}>{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity>
            <Text style={[titleStyle, {color: theme.ThirdColor}]}>See All</Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data?.map((item: MoviesType, index: React.Key) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.push(ScreensNames.MOVIE, item)}>
              <View style={GS.marginHorizontal0}>
                <Image
                  source={{
                    uri: image185(item.poster_path) || no_poster,
                  }}
                  style={[
                    {
                      width: width * 0.33,
                      height: height * 0.22,
                    },
                    GS.marginTop2,
                    GS.borderRadius16,
                  ]}
                />
                <Text style={GS.margin1}>
                  {item?.title.length > 14
                    ? item?.title.slice(0, 14) + '...'
                    : item?.title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MoviesList;
