import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Input from '../components/Input';
import InputScreen from '../components/InputScreen';
import Button from '../components/Button';
import Colours from '../constants/colours';
import baseStyles from '../components/Style';
import MonoText from '../components/MonoText';

const WordInputScreen = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [wordError, setWordError] = useState(false);
  const [definitionError, setDefinitionError] = useState(false);
  const [requestState, setRequestState] = useState({ error: false, msg: null });

  // function to send POST request to add the new word
  const handleSubmit = async () => {
    if (!word.trim()) setWordError(true);
    if (!definition.trim()) setDefinitionError(true);
    if (!word.trim() || !definition.trim()) return;

    const response = await fetch('https://wikiluke.herokuapp.com/words', {
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

  // function to get word definition from WordsAPI
  const getDefinition = async () => {
    if (definition) setDefinition('');
    const wordToSearch = word.toLowerCase().trim();
    console.log(wordToSearch);

    try {
      const response = await fetch(
        'https://us-central1-wikiluke.cloudfunctions.net/function-1',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ word: wordToSearch }),
        }
      );

      if (!response.ok) {
        setRequestState({
          error: true,
          msg: `Error getting definition for ${word}`,
        });
        throw new Error(`Something went wrong getting the definition`);
      }

      let wordJson = await response.json();
      setDefinition(wordJson.definition);
    } catch (error) {
      console.log(error.message);
    }
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
      <View
        style={{
          flexDirection: `row`,
          justifyContent: `space-evenly`,
          width: `100%`,
        }}
      >
        <TouchableOpacity
          style={{ ...styles.definitionButton }}
          activeOpacity={0.7}
          onPress={getDefinition}
        >
          <MonoText styles={{ ...styles.definitionButtonText }}>
            Get Definition
          </MonoText>
        </TouchableOpacity>
        <Button
          text="Submit"
          bgColour={Colours.green}
          onPress={handleSubmit}
          style={{
            paddingVertical: 10,
            marginTop: 35,
            borderWidth: 3,
            borderColor: Colours.green,
          }}
        />
      </View>
    </InputScreen>
  );
};

const styles = StyleSheet.create({
  input: {
    width: `100%`,
    textAlign: 'center',
  },
  definitionButton: {
    padding: 10,
    borderRadius: 5,
    marginTop: 35,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: Colours.green,
  },
  definitionButtonText: {
    ...baseStyles.h3,
    textAlign: `center`,
    // fontWeight: `bold`,
    borderRadius: 5,
  },
});
export default WordInputScreen;
