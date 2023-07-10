import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from '../src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieScreen from '../src/screens/MovieScreen';

const Root: React.FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="Movie"
          options={{headerShown: false}}
          component={MovieScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;

const styles = StyleSheet.create({});
