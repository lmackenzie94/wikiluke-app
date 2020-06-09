import React from 'react';
import { StyleSheet } from 'react-native';
import Input from '../components/Input';
import InputScreen from '../components/InputScreen';

const AdviceInputScreen = () => {
  return (
    <InputScreen title="Drop some knowledge:">
      <Input
        style={styles.input}
        blurOnSubmit
        autoCapitalize="none"
        autoCorrect={false}
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
export default AdviceInputScreen;
