import React from 'react';
import {Text as RNtext, TextProps, TextStyle} from 'react-native';
import {GS} from '../../theme/globalStyle';
import {useSelector} from 'react-redux';

type AdditionalProps = {
  style?: TextStyle;
};

const Text: React.FC<TextProps & AdditionalProps> = ({style, ...rest}) => {
  const theme = useSelector<any>(state => state.AppReducer.theme) as any;

  return <RNtext style={[{color: theme.MainText}, style]} {...rest} />;
};
export default Text;
