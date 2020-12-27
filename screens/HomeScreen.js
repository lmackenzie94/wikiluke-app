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
            text="Add Word"
            bgColour={Colours.green}
            onPress={() => navigation.navigate('Words')}
          />
          <Button
            text="Add Quote"
            bgColour={Colours.yellow}
            onPress={() => navigation.navigate('Quotes')}
          />
          <Button
            text="Add Advice"
            bgColour={Colours.red}
            onPress={() => navigation.navigate('Advice')}
          />
          <Button
            text="Add Learning"
            bgColour={Colours.purple}
            onPress={() => navigation.navigate('Learnings')}
          />
          <Button
            text="Vocabulous"
            bgColour='transparent'
            colour='black'
            onPress={() => navigation.navigate('Vocabulous')}
            style={{borderColor: Colours.brown}}
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
