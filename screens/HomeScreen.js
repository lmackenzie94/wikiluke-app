import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Wrapper from '../components/Wrapper';
import Button, { ButtonContainer } from '../components/Button';
import Colours from '../constants/colours';
import MonoText from '../components/MonoText';
import baseStyles from '../components/Style';

export default function HomeScreen({ navigation }) {
  const buttonClickHandler = (btnClicked) => {
    setInputs({ show: true, for: btnClicked });
  };

  return (
    <Wrapper>
      <View style={styles.screen}>
        {/* <MonoText styles={{ textAlign: `center` }}>Hello beautiful,</MonoText>
        <MonoText
          styles={{ fontWeight: `bold`, ...baseStyles.h3, marginTop: 10 }}
        >
          choose an option below:
        </MonoText> */}
        <ButtonContainer>
          <Button
            text="Add a word"
            bgColour={Colours.greenDark}
            onPress={() => navigation.navigate('Words')}
          />
          <Button
            text="Add a quote"
            bgColour={Colours.yellow}
            onPress={() => navigation.navigate('Quotes')}
          />
          <Button
            text="Add advice"
            bgColour={Colours.red}
            onPress={() => navigation.navigate('Advice')}
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
