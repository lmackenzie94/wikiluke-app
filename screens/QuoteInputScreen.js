import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import Input from '../components/Input';
import InputScreen from '../components/InputScreen';
import Button from '../components/Button';
import Colours from '../constants/colours';

const QuoteInputScreen = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [quoteError, setQuoteError] = useState(false);
  const [authorError, setAuthorError] = useState(false);
  const [requestState, setRequestState] = useState({ error: false, msg: null });

  const handleSubmit = async () => {
    if (!quote.trim()) setQuoteError(true);
    if (!author.trim()) setAuthorError(true);
    if (!quote.trim() || !author.trim()) return;

    const response = await fetch('https://wikiluke.herokuapp.com/quotes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: quote.trim(), author: author.trim() }), // body data type must match "Content-Type" header
    });
    if (!response.ok) {
      setRequestState({
        error: true,
        msg: 'Something went wrong, please try again',
      });
      return;
    }

    setQuote('');
    setAuthor('');
    setRequestState({ error: false, msg: `Very nice! Great success! - Borat` });
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
          if (authorError) setAuthorError(false);
          setRequestState({ error: false, msg: null });
          setAuthor(text);
        }}
        blurOnSubmit
        error={authorError}
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
export default QuoteInputScreen;
