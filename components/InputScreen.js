import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Wrapper from '../components/Wrapper';

const InputScreen = ({ children, title }) => {
  return (
    // the keyboard will close when user taps the screen
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Wrapper>
        <View style={styles.screen}>
          <Text style={styles.title}>{title}</Text>
          {children}
        </View>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: 'center',
    marginTop: -100,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: `bold`,
  },
});
export default InputScreen;
