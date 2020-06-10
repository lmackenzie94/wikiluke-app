import React from 'react';
import { StyleSheet } from 'react-native';
import Input from '../components/Input';
import InputScreen from '../components/InputScreen';
import Button from '../components/Button';
import Colours from '../constants/colours';

const QuoteInputScreen = () => {
  return (
    <InputScreen title="Add a quote:">
      <Input
        style={styles.input}
        blurOnSubmit
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Button
        text="Submit"
        bgColour={Colours.yellow}
        onPress={() => console.log('click')}
        style={{ paddingVertical: 10 }}
      />
    </InputScreen>
  );
};

const styles = StyleSheet.create({
  input: {
    width: `100%`,
    textAlign: 'center',
  },
});
export default QuoteInputScreen;
