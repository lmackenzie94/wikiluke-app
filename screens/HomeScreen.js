import React from 'react';
import { View, StyleSheet } from 'react-native';
import Wrapper from '../components/Wrapper';
import Button, { ButtonContainer } from '../components/Button';
import Colours from '../constants/colours';

export default function HomeScreen({ navigation }) {
  return (
    <Wrapper>
      <View style={styles.screen}>
        <ButtonContainer>
          <Button
            text="Add a Word"
            bgColour={Colours.green}
            onPress={() => navigation.navigate('Words')}
          />
          <Button
            text="Add a Quote"
            bgColour={Colours.yellow}
            onPress={() => navigation.navigate('Quotes')}
          />
          <Button
            text="Add Advice"
            bgColour={Colours.red}
            onPress={() => navigation.navigate('Advice')}
          />
          <Button
            text="Add a Learning"
            bgColour={Colours.purple}
            onPress={() => navigation.navigate('Learnings')}
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
