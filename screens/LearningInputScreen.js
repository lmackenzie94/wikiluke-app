import React, { useState } from 'react';
import { StyleSheet, Text, ActivityIndicator, Picker } from 'react-native';
import Input from '../components/Input';
import InputScreen from '../components/InputScreen';
import Button from '../components/Button';
import Colours from '../constants/colours';
import doFetch from '../utils/doFetch';

const categories = [
  `Business`,
  `Tech`,
  `Science`,
  `Psychology`,
  `Food & Health`,
  `Other`,
];

const LearningInputScreen = () => {
  const [learning, setLearning] = useState('');
  const [category, setCategory] = useState(categories[0].toLowerCase());
  const [customCategory, setCustomCategory] = useState('');
  const [learningError, setLearningError] = useState(false);
  const [requestState, setRequestState] = useState({
    error: false,
    msg: null,
    loading: false,
  });

  const handleSubmit = async () => {
    if (!learning.trim() || (category === 'other' && !customCategory.trim())) {
      setLearningError(true);
      return;
    }
    setRequestState((prev) => ({ ...prev, loading: true }));

    try {
      const response = await doFetch('learnings', 'POST', {
        text: learning.trim(),
        category:
          category == 'other'
            ? customCategory.toLowerCase().trim()
            : category.trim(),
      });

      if (!response.ok) {
        setRequestState({
          error: true,
          msg: 'Something went wrong, please try again',
          loading: false,
        });
        return;
      }

      setLearning('');
      setCategory('');
      setCustomCategory('');
      setRequestState({
        error: false,
        msg: `You smart, you loyal`,
        loading: false,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <InputScreen title="Add a learning:">
      <Input
        style={styles.input}
        placeholder="ex. Wal-Mart averages a profit of $1.8 million every hour."
        value={learning}
        onChangeText={(text) => {
          if (learningError) setLearningError(false);
          setRequestState({ error: false, msg: null });
          setLearning(text);
        }}
        blurOnSubmit
        error={learningError && !learning.trim()}
      />
      <Picker
        selectedValue={category}
        color={Colours.purple}
        style={{
          height: 20,
          width: 150,
          marginTop: -50,
          marginBottom: 40,
          paddingVertical: 40,
        }}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        {categories.map((category, idx) => (
          <Picker.Item
            key={idx}
            label={category}
            value={category.toLowerCase()}
          />
        ))}
      </Picker>
      {category === 'other' && (
        <Input
          style={styles.categoryInput}
          placeholder="Enter the category"
          value={customCategory}
          onChangeText={(text) => {
            if (learningError) setLearningError(false);
            setRequestState({ error: false, msg: null });
            setCustomCategory(text);
          }}
          blurOnSubmit
          error={learningError && !customCategory.trim()}
        />
      )}
      <Button
        text="Submit"
        bgColour={Colours.purple}
        onPress={handleSubmit}
        style={{
          paddingVertical: 10,
          marginTop: category === 'other' ? 50 : 155,
          opacity: requestState.loading ? 0 : 1,
        }}
      />
      <ActivityIndicator
        size="large"
        color={Colours.purple}
        animating={requestState.loading}
        style={{
          display: requestState.loading ? `inline-block` : `none`,
          width: 125,
          paddingTop: 20,
        }}
      />
      {requestState.msg && (
        <Text
          style={{ marginTop: 10, color: requestState.error ? `red` : `green` }}
        >
          {requestState.msg}
        </Text>
      )}
    </InputScreen>
  );
};

const styles = StyleSheet.create({
  input: {
    width: `100%`,
    textAlign: 'center',
  },
  categoryInput: {
    width: `100%`,
    textAlign: 'center',
    marginTop: 90,
  },
});
export default LearningInputScreen;
