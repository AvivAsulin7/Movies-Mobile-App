import {StyleSheet} from 'react-native';
import React from 'react';

import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);
import Root from './src/root/Root';

const App: React.FC = () => {
  return <Root />;
};

const styles = StyleSheet.create({});

export default App;
