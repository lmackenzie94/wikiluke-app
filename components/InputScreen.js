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
    // flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  input: {
    width: `100%`,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: `center`,
  },
});
export default InputScreen;
