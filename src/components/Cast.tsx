import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import Text from './reusable-components/Text';
import React from 'react';
import {GS} from '../theme/globalStyle';
import {useSelector} from 'react-redux';
import {image185} from '../api/api';
import {ActorType} from '../types/types';
import {AppReducerType} from '../global_state/types';

type Props = {
  cast: ActorType[];
  navigateToActor: (person: ActorType) => void;
};

const Cast: React.FC<Props> = ({cast, navigateToActor}) => {
  const theme = useSelector<AppReducerType>(
    state => state.AppReducer.theme,
  ) as any;

  return (
    <View style={[GS.marginVertical4]}>
      <Text style={[GS.text22, GS.marginHorizontal4]}>Top Cast</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cast &&
          cast.map((person: ActorType, index: React.Key) => {
            return (
              <TouchableOpacity
                key={index}
                style={[GS.alignCenter, GS.marginTop2]}
                onPress={() => navigateToActor(person)}>
                <View
                  style={[
                    GS.borderRadiusMax,
                    GS.alignCenter,
                    {overflow: 'hidden'},
                  ]}>
                  <Image
                    source={
                      person.profile_path
                        ? {
                            uri: image185(person?.profile_path),
                          }
                        : require('../assets/default_actor.png')
                    }
                    style={[
                      {
                        width: 80,
                        height: 80,
                      },
                    ]}
                  />
                </View>

                <Text style={[GS.marginHorizontal2]}>
                  {person?.character.length > 10
                    ? person?.character.slice(0, 10) + '...'
                    : person?.character}
                </Text>
                <Text
                  style={[GS.marginHorizontal2, {color: theme.PrimaryColor}]}>
                  {person?.original_name.length > 10
                    ? person?.original_name.slice(0, 10) + '...'
                    : person?.original_name}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Cast;
