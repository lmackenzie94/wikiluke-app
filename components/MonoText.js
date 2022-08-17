import React from 'react';
import { Text } from 'react-native';
import baseStyles from './Style';

export default function MonoText({ children, styles }) {
  return (
    <Text
      style={{
        fontFamily: 'Courier New',
        ...baseStyles.p,
        ...styles,
      }}
    >
      {children}
    </Text>
  );
}
