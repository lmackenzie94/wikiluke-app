import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import MonoText from './MonoText';
import baseStyles from './Style';
import Colours from '../constants/colours';

export function ButtonContainer({ children, width = 300 }) {
  return <View style={{ ...styles.buttonContainer, width }}>{children}</View>;
}

export default function Button({
  onPress,
  text,
  bgColour = Colours.green,
  color = `white`,
}) {
  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: bgColour }}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <MonoText styles={{ ...styles.buttonText, color }}>{text}</MonoText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 15,
  },
  buttonText: {
    ...baseStyles.h3,
    textAlign: `center`,
    fontWeight: `bold`,
  },
  buttonContainer: {
    flexDirection: `column`,
    justifyContent: `space-evenly`,
    marginTop: 50,
    maxWidth: `80%`,
  },
});
