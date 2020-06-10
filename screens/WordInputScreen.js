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

  const handleSubmit = async () => {
    if (!word) setWordError(true);
    if (!definition) setDefinitionError(true);
    if (!word || !definition) return;

    const response = await fetch('https://better-brain.herokuapp.com/words', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: word, definition }), // body data type must match "Content-Type" header
    });

    console.log('RESPONSE', response.json());
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
