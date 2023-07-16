import {View, Dimensions, ScrollView, Image} from 'react-native';
import Text from '../components/reusable-components/Text';
import React, {useState} from 'react';
import {GS} from '../theme/globalStyle';
import {useNavigation} from '@react-navigation/native';
import NavigateBack from '../components/NavigateBack';
import {useSelector} from 'react-redux';
import MoviesList from '../components/MoviesList';

type Props = {};

const {width, height} = Dimensions.get('window');

const PersonScreen = (props: Props) => {
  const theme = useSelector<any>(state => state.AppReducer.theme) as any;
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4, 5]);

  const navigation = useNavigation();

  const styleViewDeatils = [GS.paddingHorizontal4, GS.alignCenter];
  const styleTextDetails = [GS.text14, {color: theme.SecondaryColor}];

  return (
    <ScrollView contentContainerStyle={[GS.bgBlack]}>
      <NavigateBack navigation={navigation} />

      <View>
        <View
          style={[
            GS.justifyCenter,
            GS.row,
            GS.alignSelfCenter,
            GS.paddingTop2,
            GS.baseShadow2,
          ]}>
          <View
            style={[
              GS.borderRadiusMax,
              GS.alignCenter,
              {overflow: 'hidden', height: 280, width: 280},
            ]}>
            <Image
              source={{
                uri: 'https://snworksceo.imgix.net/jst/2a0b1bee-2c94-4ce9-9c68-4fe0efc81239.sized-1000x1000.jpg?w=1750',
              }}
              style={{
                width: width * 0.74,
                height: height * 0.43,
              }}
            />
          </View>
        </View>
        <View style={[GS.marginTop4]}>
          <Text style={[GS.textAlignCenter, GS.bodyBold26, GS.bold]}>
            Keanu Reevs
          </Text>
          <Text
            style={[
              GS.textAlignCenter,
              GS.bodyMedium18,
              {color: theme.SecondaryColor},
            ]}>
            London, United Kingdom
          </Text>
        </View>
        <View
          style={[
            GS.marginHorizontal4,
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
            <Text style={styleTextDetails}>Male</Text>
          </View>
          <View style={[styleViewDeatils, GS.borderRight]}>
            <Text>Birthday</Text>
            <Text style={styleTextDetails}>1964-05-12</Text>
          </View>
          <View style={[styleViewDeatils, GS.borderRight]}>
            <Text>Known for</Text>
            <Text style={styleTextDetails}>Acting</Text>
          </View>
          <View style={styleViewDeatils}>
            <Text>Popularity</Text>
            <Text style={styleTextDetails}>64.23</Text>
          </View>
        </View>
        <View style={[GS.marginVertical5, GS.marginHorizontal4]}>
          <Text style={[GS.bodyMedium18]}>Biography</Text>
          <Text style={[GS.marginVertical1, {color: theme.SecondaryColor}]}>
            Keanu Charles Reeves (/kiˈɑːnuː/ kee-AH-noo;[4][5][6] born September
            2, 1964) is a Canadian[b] actor. Born in Beirut and raised in
            Toronto, Reeves began acting in theatre productions and in
            television films before making his feature film debut in Youngblood
            (1986). He had his breakthrough role in the science fiction comedy
            Bill & Ted's Excellent Adventure (1989), and he reprised his role in
            its sequels. He gained praise for playing a hustler in the
            independent drama My Own Private Idaho (1991) and established
            himself as an action hero with leading roles in Point Break (1991)
            and Speed (1994).
          </Text>
        </View>
        <MoviesList title="Movies" hideSeeAll={true} data={personMovies} />
      </View>
    </ScrollView>
  );
};

export default PersonScreen;
