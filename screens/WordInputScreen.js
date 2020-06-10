import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Input from '../components/Input';
import InputScreen from '../components/InputScreen';
import Button from '../components/Button';
import Colours from '../constants/colours';

const WordInputScreen = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [wordError, setWordError] = useState(false);
  const [definitionError, setDefinitionError] = useState(false);

  const handleSubmit = () => {
    if (!word) setWordError(true);
    if (!definition) setDefinitionError(true);

    if (!word || !definition) return;

    console.log(word, definition);
    setWord('');
    setDefinition('');
  };

  return (
    <InputScreen title="Add a word:">
      <Input
        style={styles.input}
        placeholder="Word"
        value={word}
        onChangeText={(text) => {
          if (wordError) setWordError(false);
          setWord(text);
        }}
        blurOnSubmit
        error={wordError}
      />
      <Input
        style={styles.input}
        placeholder="Definition"
        value={definition}
        onChangeText={(text) => {
          if (definitionError) setDefinitionError(false);
          setDefinition(text);
        }}
        blurOnSubmit
        error={definitionError}
      />
      <Button
        text="Submit"
        bgColour={Colours.greenDark}
        onPress={handleSubmit}
        style={{ paddingVertical: 10, marginTop: 35 }}
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
export default WordInputScreen;
