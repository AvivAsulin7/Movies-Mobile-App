import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {do_something} from './src/global_state/actions';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Root from './root/Root';

const App: React.FC = () => {
  // const dispatch = useDispatch();
  // const state = useSelector<any>(state => state.AppReducer);

  // console.log(state);

  // useEffect(() => {
  //   dispatch(do_something({}));
  // }, []);

  return <Root />;
};

const styles = StyleSheet.create({});

export default App;
