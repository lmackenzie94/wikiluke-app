import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import MonoText from './MonoText';
import Colours from '../constants/colours';
import baseStyles from '../components/Style';

function Header({ title, setInputs }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={{ ...styles.headerText, ...baseStyles.h1 }}
        onPress={() => setInputs({ show: false, for: '' })}
        activeOpacity={0.7}
      >
        <MonoText styles={{ ...styles.headerText, ...baseStyles.h1 }}>
          {title}
        </MonoText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colours.grayLight,
    borderBottomWidth: 1,
    borderBottomColor: Colours.gray,
    paddingTop: 70,
    paddingBottom: 20,
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
