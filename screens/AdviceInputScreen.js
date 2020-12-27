import React, { useState } from 'react';
import { StyleSheet, Text, ActivityIndicator } from 'react-native';
import Input from '../components/Input';
import InputScreen from '../components/InputScreen';
import Button from '../components/Button';
import Colours from '../constants/colours';
import {doFetch} from '../utils/utils';

const adviceInputScreen = () => {
  const [advice, setAdvice] = useState('');
  const [adviceError, setAdviceError] = useState(false);
  const [requestState, setRequestState] = useState({
    error: false,
    msg: null,
    loading: false,
  });

  const handleSubmit = async () => {
    if (!advice.trim()) {
      setAdviceError(true);
      return;
    }
    setRequestState((prev) => ({ ...prev, loading: true }));

    try {
      const response = await doFetch('advice', 'POST', { text: advice.trim() });
      if (!response.ok) {
        setRequestState({
          error: true,
          msg: 'Something went wrong, please try again',
          loading: false,
        });
        return;
      }

      setAdvice('');
      setRequestState({
        error: false,
        msg: `Successfully added. Consider yourself a little wiser.'`,
        loading: false,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <InputScreen title="Add Advice:">
      <Input
        style={styles.input}
        placeholder="ex. Every pizza is a personal pizza if you try hard enough and believe in yourself"
        value={advice}
        onChangeText={(text) => {
          if (adviceError) setAdviceError(false);
          setRequestState({ error: false, msg: null });
          setAdvice(text);
        }}
        blurOnSubmit
        error={adviceError}
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
        bgColour={Colours.red}
        onPress={handleSubmit}
        style={{
          paddingVertical: 10,
          marginTop: 35,
          display: requestState.loading ? `none` : `inline-block`,
        }}
      />
      <ActivityIndicator
        size="large"
        color={Colours.red}
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
export default adviceInputScreen;
