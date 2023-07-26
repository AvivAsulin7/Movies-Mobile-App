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
import {image185} from '../api/api';
import {useSelector} from 'react-redux';
import {MoviesType} from '../types/types';
import {AppReducerType} from '../global_state/types';

const titleStyle = [GS.bodyBold18, GS.text20];

type Props = {
  title: String;
  data: MoviesType[];
  hideSeeAll?: Boolean;
  navigateToMovie: (item: MoviesType) => void;
};

const {width, height} = Dimensions.get('window');

const MoviesList: React.FC<Props> = ({
  title,
  data,
  hideSeeAll,
  navigateToMovie,
}) => {
  const theme = useSelector<AppReducerType>(
    state => state.AppReducer.theme,
  ) as any;

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
              onPress={() => navigateToMovie(item)}>
              <View style={GS.marginHorizontal0}>
                <Image
                  source={
                    item.poster_path
                      ? {
                          uri: image185(item.poster_path),
                        }
                      : require('../assets/no_poster.jpeg')
                  }
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
