import React from 'react';
import { TextInput, StyleSheet, Text } from 'react-native';
import baseStyles from './Style';

const Input = (props) => {
  return (
    <>
      <TextInput
        {...props}
        multiline
        numberOfLines={3}
        style={{ ...styles.input, ...props.style }}
      />
      {props.error && <Text style={styles.error}>Field cannot be empty</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    ...baseStyles.p,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 15,
    padding: 5,
    fontFamily: `Courier`,
  },
  error: {
    color: `red`,
    marginTop: -5,
    ...baseStyles.pSmall,
  },
});

export default Input;
