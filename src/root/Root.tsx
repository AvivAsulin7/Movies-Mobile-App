import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreensNames, RootStackNamesParams} from './types';
import MovieScreen from '../screens/MovieScreen';
import PersonScreen from '../screens/PersonScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

const Root: React.FC = () => {
  const Stack = createNativeStackNavigator<RootStackNamesParams>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreensNames.HOME}
          options={{headerShown: false}}
          component={HomeScreen}
        />
        <Stack.Screen
          name={ScreensNames.MOVIE}
          options={{headerShown: false}}
          component={MovieScreen}
        />
        <Stack.Screen
          name={ScreensNames.PERSON}
          options={{headerShown: false}}
          component={PersonScreen}
        />
        <Stack.Screen
          name={ScreensNames.SEARCH}
          options={{headerShown: false}}
          component={SearchScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
