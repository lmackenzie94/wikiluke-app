import React, { useState } from 'react';
import { StyleSheet, Text, ActivityIndicator } from 'react-native';
import Input from '../components/Input';
import InputScreen from '../components/InputScreen';
import Button from '../components/Button';
import Colours from '../constants/colours';
import doFetch from '../utils/doFetch';

const QuoteInputScreen = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [quoteError, setQuoteError] = useState(false);
  const [requestState, setRequestState] = useState({
    error: false,
    msg: null,
    loading: false,
  });

  const handleSubmit = async () => {
    if (!quote.trim()) setQuoteError(true);
    if (!quote.trim()) return;
    setRequestState((prev) => ({ ...prev, loading: true }));

    try {
      const response = await doFetch('quotes', 'POST', {
        text: quote.trim(),
        author: author.trim(),
      });

      if (!response.ok) {
        setRequestState({
          error: true,
          msg: 'Something went wrong, please try again',
          loading: false,
        });
        return;
      }

      setQuote('');
      setAuthor('');
      setRequestState({
        error: false,
        msg: `Very nice! Great success! - Borat`,
        loading: false,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <InputScreen title="Add a quote:">
      <Input
        style={styles.input}
        placeholder="ex. You miss 100% of the shots you don't take - Wayne Gretzky"
        value={quote}
        onChangeText={(text) => {
          if (quoteError) setQuoteError(false);
          setRequestState({ error: false, msg: null });
          setQuote(text);
        }}
        blurOnSubmit
        error={quoteError}
      />
      <Input
        style={styles.input}
        placeholder="Michael Scott"
        value={author}
        onChangeText={(text) => {
          setRequestState({ error: false, msg: null });
          setAuthor(text);
        }}
        blurOnSubmit
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
        bgColour={Colours.yellow}
        onPress={handleSubmit}
        style={{
          paddingVertical: 10,
          marginTop: 35,
          display: requestState.loading ? `none` : `inline-block`,
        }}
      />
      <ActivityIndicator
        size="large"
        color={Colours.yellow}
        animating={requestState.loading}
        style={{
          display: requestState.loading ? `inline-block` : `none`,
          width: 125,
          paddingTop: 20,
        }}
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
