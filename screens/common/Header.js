import React from 'react';
import { View, Text } from 'react-native';
import Styles from '../Styles';

export const Header = ({title}) => {
  const { HeadercontainerStyle, HeadertitleStyle } = Styles;
  return (
    <View style={HeadercontainerStyle}>
        <Text style={HeadertitleStyle}>{title}</Text>
    </View>
  );
};

export default Header;