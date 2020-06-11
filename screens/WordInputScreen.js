import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import Input from '../components/Input';
import InputScreen from '../components/InputScreen';
import Button from '../components/Button';
import Colours from '../constants/colours';

const WordInputScreen = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [wordError, setWordError] = useState(false);
  const [definitionError, setDefinitionError] = useState(false);
  const [requestState, setRequestState] = useState({ error: false, msg: null });

  const handleSubmit = async () => {
    if (!word.trim()) setWordError(true);
    if (!definition.trim()) setDefinitionError(true);
    if (!word.trim() || !definition.trim()) return;

    const response = await fetch('https://better-brain.herokuapp.com/words', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: word.trim(),
        definition: definition.trim(),
      }), // body data type must match "Content-Type" header
    });
    if (!response.ok) {
      setRequestState({
        error: true,
        msg: 'Something went wrong, please try again',
      });
      return;
    }

    setWord('');
    setDefinition('');
    setRequestState({
      error: false,
      msg: `Success: /səkˈses/ [noun] the accomplishment of an aim or purpose`,
    });
  };

  return (
    <InputScreen title="Add a word:">
      <Input
        style={styles.input}
        placeholder="ex. Bumfuzzle"
        value={word}
        onChangeText={(text) => {
          if (wordError) setWordError(false);
          setRequestState({ error: false, msg: null });
          setWord(text);
        }}
        blurOnSubmit
        error={wordError}
      />
      <Input
        style={styles.input}
        placeholder="to confuse or fluster"
        value={definition}
        onChangeText={(text) => {
          if (definitionError) setDefinitionError(false);
          setRequestState({ error: false, msg: null });
          setDefinition(text);
        }}
        blurOnSubmit
        error={definitionError}
      />
      {requestState.msg && (
        <Text
          style={{ marginTop: 10, color: requestState.error ? `red` : `green` }}
        >
          {requestState.msg}
        </Text>
      )}
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
