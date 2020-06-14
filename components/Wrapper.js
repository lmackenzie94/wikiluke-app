import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Wrapper({ children }) {
  return <View style={styles.wrapper}>{children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 15,
    paddingRight: 15,
    maxWidth: 450,
    width: `100%`,
    marginLeft: `auto`,
    marginRight: `auto`,
  },
});
