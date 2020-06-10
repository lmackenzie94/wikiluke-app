import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import MonoText from './MonoText';
import Colours from '../constants/colours';
import baseStyles from '../components/Style';

function Footer() {
  return (
    <View style={styles.footer}>
      <MonoText styles={{ ...styles.footerText, ...baseStyles.pSmall }}>
        &copy; wikiluke | 2020
      </MonoText>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: `black`,
    paddingTop: 10,
    paddingBottom: 25,
  },
  footerText: {
    fontWeight: `bold`,
    textAlign: `center`,
    color: `white`,
  },
});

export default Footer;
