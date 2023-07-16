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

const titleStyle = [GS.bodyBold18, GS.text20];

type Props = {
  title: String;
  data: Number[];
  hideSeeAll?: Boolean;
};

const {width, height} = Dimensions.get('window');

const MoviesList = ({title, data, hideSeeAll}: Props) => {
  const navigation = useNavigation();
  const movieName = 'Fast and furious 10';
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
            <Text style={titleStyle}>See All</Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.push('Movie', item)}>
              <View style={GS.marginHorizontal0}>
                <Image
                  source={{
                    uri: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/06/extraction-2-01.jpg',
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
                <Text>
                  {movieName.length > 14
                    ? movieName.slice(0, 14) + '...'
                    : movieName}
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
