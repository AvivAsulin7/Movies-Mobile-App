import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {GS} from '../theme/globalStyle';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: String;
  data: Number[];
};

const {width, height} = Dimensions.get('window');

const MoviesList = ({title, data}: Props) => {
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
        <Text style={[GS.white, GS.bodyBold18, GS.text20]}>{title}</Text>
        <TouchableOpacity>
          <Text style={[GS.white, GS.bodyBold18, GS.text20]}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={GS.paddingHorizontal16}>
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.navigate('Movie', item)}>
              <View style={GS.marginHorizontal0}>
                <Image
                  source={{
                    uri: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/06/extraction-2-01.jpg',
                  }}
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                    marginTop: 15,
                    borderRadius: 18,
                  }}
                />
                <Text style={GS.white}>
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
