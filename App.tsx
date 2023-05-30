import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector<any>(state => state);
  console.log(state);

  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
