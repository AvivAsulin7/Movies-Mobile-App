import {View, Dimensions, ScrollView, Image} from 'react-native';
import Text from '../components/reusable-components/Text';
import React, {useState, useEffect} from 'react';
import {useApiRequest} from '../hooks/useApiRequest';
import {GS} from '../theme/globalStyle';
import {useNavigation, useRoute} from '@react-navigation/native';
import NavigateBack from '../components/NavigateBack';
import {useSelector} from 'react-redux';
import MoviesList from '../components/MoviesList';
// @ts-ignore
import {default_actor} from '../assets/default_actor.png';
import {endpoints, image342} from '../api/api';
import Loading from '../components/Loading';
import {ActorDataType, MoviesType} from '../types/types';
import type {RouteProp} from '@react-navigation/native';
import {RootStackNamesParams, ScreensNames} from '../root/types';

const {width, height} = Dimensions.get('window');

const PersonScreen = () => {
  const theme = useSelector<any>(state => state.AppReducer.theme) as any;
  const {sendRequest} = useApiRequest();
  const [personMovies, setPersonMovies] = useState<MoviesType[]>([]);
  const [actor, setActor] = useState<ActorDataType>();
  const {params: person} = useRoute();

  const styleViewDeatils = [GS.paddingHorizontal4, GS.alignCenter];
  const styleTextDetails = [GS.text14, {color: theme.PrimaryColor}];

  useEffect(() => {
    const fetchDetailsPerson = async () => {
      try {
        let url = endpoints.personDetails(person.id);
        let data = await sendRequest({url});
        console.log('actor details:  ', url);

        if (data) setActor(data);
        console.log(person);
        url = endpoints.personMovies(person.id);
        data = await sendRequest({url});
        console.log(url);

        if (data && data.cast) setPersonMovies(data.cast);

        console.log('moviesss: ', data.cast);
      } catch (error) {}
    };
    fetchDetailsPerson();
  }, []);

  return (
    <ScrollView contentContainerStyle={{backgroundColor: theme.PrimaryBG}}>
      <NavigateBack />

      <View>
        <View
          style={[
            GS.justifyCenter,
            GS.row,
            GS.alignSelfCenter,
            GS.paddingTop2,
            GS.baseShadow2,
          ]}>
          {actor && (
            <View
              style={[
                GS.borderRadiusMax,
                GS.alignCenter,
                {overflow: 'hidden', height: 280, width: 280},
              ]}>
              <Image
                source={{
                  uri: image342(actor?.profile_path) || default_actor,
                }}
                style={{
                  width: width * 0.74,
                  height: height * 0.43,
                }}
              />
            </View>
          )}
        </View>
        {actor && (
          <>
            <View style={[GS.marginTop4]}>
              <Text style={[GS.textAlignCenter, GS.bodyBold26, GS.bold]}>
                {actor?.name}
              </Text>
              <Text
                style={[
                  GS.textAlignCenter,
                  GS.bodyMedium18,
                  {color: theme.PrimaryColor},
                ]}>
                {actor?.place_of_birth}
              </Text>
            </View>
            <View
              style={[
                GS.marginHorizontal2,
                GS.marginTop4,
                GS.padding2,
                GS.row,
                GS.justifySpaceBetween,
                GS.alignCenter,
                GS.borderRadius32,
                {backgroundColor: theme.SecondaryBG},
              ]}>
              <View style={[styleViewDeatils, GS.borderRight]}>
                <Text>Gender</Text>
                <Text style={styleTextDetails}>
                  {actor?.gender == 1 ? 'Female' : 'Male'}
                </Text>
              </View>
              <View style={[styleViewDeatils, GS.borderRight]}>
                <Text>Birthday</Text>
                <Text style={styleTextDetails}>{actor?.birthday}</Text>
              </View>
              <View style={[styleViewDeatils, GS.borderRight]}>
                <Text>Known for</Text>
                <Text style={styleTextDetails}>
                  {actor?.known_for_department}
                </Text>
              </View>
              <View style={styleViewDeatils}>
                <Text>Popularity</Text>
                <Text style={styleTextDetails}>
                  {actor?.popularity?.toFixed(2)} %
                </Text>
              </View>
            </View>
            <View style={[GS.marginVertical5, GS.marginHorizontal4]}>
              <Text style={[GS.bodyMedium18]}>Biography</Text>
              <Text style={[GS.marginVertical1, {color: theme.PrimaryColor}]}>
                {actor?.biography || 'No Available'}
              </Text>
            </View>
          </>
        )}

        <MoviesList title="Movies" hideSeeAll={true} data={personMovies} />
      </View>
    </ScrollView>
  );
};

export default PersonScreen;
