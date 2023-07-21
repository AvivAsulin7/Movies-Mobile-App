import {Dimensions, View} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import {GS} from '../theme/globalStyle';

const {width, height} = Dimensions.get('window');

const Loading: React.FC = () => {
  return (
    <View
      style={[
        GS.absolute,
        GS.row,
        GS.justifyCenter,
        GS.alignCenter,
        {width, height},
      ]}>
      <Progress.CircleSnail
        thickness={12}
        size={160}
        color={['red', 'green', 'blue']}
      />
    </View>
  );
};

export default Loading;
