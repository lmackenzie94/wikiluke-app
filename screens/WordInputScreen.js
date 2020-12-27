import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Input from '../components/Input';
import InputScreen from '../components/InputScreen';
import Button from '../components/Button';
import Colours from '../constants/colours';
import baseStyles from '../components/Style';
import MonoText from '../components/MonoText';
import { doFetch } from '../utils/utils';

const WordInputScreen = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [wordError, setWordError] = useState(false);
  const [definitionError, setDefinitionError] = useState(false);
  const [definitionLoading, setDefinitionLoading] = useState(false);
  const [requestState, setRequestState] = useState({
    error: false,
    msg: null,
    loading: false,
  });

  // function to send POST request to add the new word
  const handleSubmit = async () => {
    if (!word.trim()) setWordError(true);
    if (!definition.trim()) setDefinitionError(true);
    if (!word.trim() || !definition.trim()) return;
    setRequestState(prev => ({ ...prev, loading: true }));

    const response = await doFetch('words', 'POST', {
      name: word.trim(),
      definition: definition.trim(),
    });

    if (!response.ok) {
      let msg =
        response.status === 409
          ? `You've already saved that word`
          : `Something went wrong, please try again`;
      setRequestState({
        error: true,
        msg,
        loading: false,
      });
      return;
    }

    setWord('');
    setDefinition('');
    setRequestState({
      error: false,
      msg: `Success: /səkˈses/ [noun] the accomplishment of an aim or purpose`,
      loading: false,
    });
  };

  // function to get word definition from WordsAPI
  const getDefinition = async () => {
    if (definition) setDefinition('');
    const wordToSearch = word.toLowerCase().trim();

    try {
      if (!wordToSearch) {
        setRequestState({
          error: true,
          msg: `Silly goose, you forgot to enter a word`,
        });
        throw new Error(`Word input is empty`);
      }
      setDefinitionLoading(true);
      const response = await fetch(
        'https://us-central1-wikiluke.cloudfunctions.net/wikiluke',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ word: wordToSearch }),
        }
      );

      if (!response.ok) {
        // setDefinitionLoading(false);
        setRequestState({
          error: true,
          msg: `Hmm, are you sure '${word}' is a real word?`,
        });
        throw new Error(`Error getting the definition`);
      }

      const wordJson = await response.json();
      setDefinition(wordJson.definition);
      // setRequestState({
      //   error: true,
      //   msg: `Hmm, are you sure '${word}' is a real word?`,
      // });
      // throw new Error(`Error getting the definition`);
    } catch (error) {
      console.log(error.message);
    } finally {
      setDefinitionLoading(false);
    }
  };

  return (
    <InputScreen title="Add a word:">
      <Input
        style={styles.input}
        placeholder="ex. Bumfuzzle"
        value={word}
        onChangeText={text => {
          if (wordError) setWordError(false);
          setRequestState({ error: false, msg: null });
          setWord(text);
        }}
        blurOnSubmit
        error={wordError}
        editable={!definitionLoading || !requestState.loading}
      />
      <Input
        style={styles.input}
        placeholder="to confuse or fluster"
        value={definition}
        onChangeText={text => {
          if (definitionError) setDefinitionError(false);
          setRequestState({ error: false, msg: null });
          setDefinition(text);
        }}
        blurOnSubmit
        error={definitionError}
        editable={!definitionLoading || !requestState.loading}
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
          justifyContent: `space-between`,
          alignItems: `center`,
          width: `100%`,
        }}
      >
        <TouchableOpacity
          style={{ ...styles.definitionButton }}
          activeOpacity={0.7}
          onPress={getDefinition}
        >
          <MonoText styles={{ ...styles.definitionButtonText }}>
            {definitionLoading ? `Loading...` : `Get Definition`}
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
            display: requestState.loading ? `none` : `inline-block`,
            width: 120,
          }}
        />
        <ActivityIndicator
          size="large"
          color={Colours.green}
          animating={requestState.loading}
          style={{
            display: requestState.loading ? `inline-block` : `none`,
            width: 125,
            paddingTop: 20,
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
    width: 180,
  },
  definitionButtonText: {
    ...baseStyles.h3,
    textAlign: `center`,
    // fontWeight: `bold`,
    borderRadius: 5,
  },
});
export default WordInputScreen;
