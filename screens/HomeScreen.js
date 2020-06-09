import React from 'react';
import { View, StyleSheet } from 'react-native';
import Wrapper from '../components/Wrapper';
import MonoText from '../components/MonoText';
import Button, { ButtonContainer } from '../components/Button';
import Colours from '../constants/colours';

export default function HomeScreen({ setInputs }) {
  const buttonClickHandler = (btnClicked) => {
    console.log('HEY', btnClicked);
    setInputs({ show: true, for: btnClicked });
  };

  return (
    <Wrapper>
      <View style={styles.screen}>
        <MonoText styles={{ textAlign: `center` }}>
          Hello beautiful, choose an option below:
        </MonoText>
        <ButtonContainer>
          <Button
            text="Add a word"
            bgColour={Colours.greenLight}
            onPress={buttonClickHandler.bind(this, 'word')}
          />
          <Button
            text="Add a quote"
            bgColour={Colours.greenLighter}
            onPress={buttonClickHandler.bind(this, 'quote')}
          />
          <Button
            text="Add advice"
            bgColour={Colours.greenLight}
            onPress={buttonClickHandler.bind(this, 'advice')}
          />
        </ButtonContainer>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    padding: 10,
    alignItems: `center`,
  },
});
