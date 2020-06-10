import React from 'react';
import { StyleSheet, View } from 'react-native';
import MonoText from './MonoText';
import Colours from '../constants/colours';
import baseStyles from '../components/Style';

function Header({ title, navigation }) {
  return (
    <View style={styles.header}>
      <MonoText styles={{ ...styles.headerText, ...baseStyles.h1 }}>
        {title}
      </MonoText>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: `white`,
    borderBottomWidth: 1,
    borderBottomColor: Colours.grayLight,
    paddingTop: 60,
    paddingBottom: 15,
    paddingHorizontal: 20,
    // marginBottom: 50,
  },
  headerText: {
    fontWeight: `bold`,
    textAlign: `center`,
    color: Colours.green,
  },
});

export default Header;
