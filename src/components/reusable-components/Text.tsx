import React from 'react';
import {Text as RNtext, TextProps, TextStyle} from 'react-native';
import {useSelector} from 'react-redux';
import {AppReducerType} from '../../global_state/types';

type AdditionalProps = {
  style?: TextStyle;
};

const Text: React.FC<TextProps & AdditionalProps> = ({style, ...rest}) => {
  const theme = useSelector<AppReducerType>(
    state => state.AppReducer.theme,
  ) as any;

  return <RNtext style={[{color: theme.MainText}, style]} {...rest} />;
};
export default Text;
