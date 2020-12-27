import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Button from '../components/Button';
import Colours from '../constants/colours';
import baseStyles from '../components/Style';
import MonoText from '../components/MonoText';
import { doFetch, getRandomItem } from '../utils/utils';
import Wrapper from '../components/Wrapper';
import Card from '../components/Card';

const VocabulousScreen = () => {
  const [words, setWords] = useState([]);
  const [randomWord, setRandomWord] = useState({});
  const [requestState, setRequestState] = useState({
    error: false,
    msg: null,
    loading: false,
  });

  useEffect(() => {
    // function to get all words
    const getWords = async () => {
      try {
        setRequestState(prev => ({ ...prev, loading: true }));

        const response = await doFetch('words', 'GET');

        if (!response.ok) {
          setRequestState({
            error: true,
            msg: `Couldn't fetch words.`,
            loading: false,
          });
          return;
        }

        const words = await response.json();

        setWords(words);
        setRandomWord(getRandomItem(words));
        setRequestState({
          error: false,
          msg: ``,
          loading: false,
        });
      } catch (error) {
        console.log(error.message);
      }
    };

    getWords();
  }, []);

  const nextWord = () => {
    setRandomWord(getRandomItem(words));
  };

  console.log(randomWord);

  return (
    <Wrapper>
      <View style={styles.cardContainer}>
        {requestState.loading ? (
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
        ) : (
          <>
            <Card word={randomWord} />
            <Button
              text="Next"
              onPress={nextWord}
              bgColour="white"
              colour="black"
              style={{ paddingVertical: 10, marginTop: 75 }}
            />
          </>
        )}
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginTop: -40,
  },
});

export default VocabulousScreen;
