import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import Text from './reusable-components/Text';
import React from 'react';
import {GS} from '../theme/globalStyle';
import {useSelector} from 'react-redux';
import {navigationProps} from '../types/types';

type Props = {
  cast: any;
};

const Cast = ({cast, navigation}: Props & navigationProps) => {
  const theme = useSelector<any>(state => state.AppReducer.theme) as any;
  const personName = 'Keanu Reevs';
  const characterName = 'John Wick';

  return (
    <View style={[GS.marginVertical4]}>
      <Text style={[GS.text22, GS.marginHorizontal4]}>Top Cast</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cast &&
          cast.map((person: any, index: React.Key) => {
            return (
              <TouchableOpacity
                key={index}
                style={[GS.alignCenter, GS.marginTop2]}
                onPress={() => navigation.navigate('Person', person)}>
                <View
                  style={[
                    GS.borderRadiusMax,
                    GS.alignCenter,
                    {overflow: 'hidden'},
                  ]}>
                  <Image
                    source={{
                      uri: 'https://snworksceo.imgix.net/jst/2a0b1bee-2c94-4ce9-9c68-4fe0efc81239.sized-1000x1000.jpg?w=1750',
                    }}
                    style={[
                      {
                        width: 80,
                        height: 80,
                      },
                    ]}
                  />
                </View>

                <Text style={[GS.marginHorizontal2]}>
                  {characterName.length > 10
                    ? characterName.slice(0, 10) + '...'
                    : characterName}
                </Text>
                <Text
                  style={[GS.marginHorizontal2, {color: theme.SecondaryColor}]}>
                  {personName.length > 10
                    ? personName.slice(0, 10) + '...'
                    : personName}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Cast;
