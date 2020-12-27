import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import MonoText from './MonoText';
import baseStyles from './Style';
import Colours from '../constants/colours';
import CardFlip from 'react-native-card-flip';
import { getRandomColour } from '../utils/utils';

// export function CardContainer({ children, width = 300 }) {
//   return <View style={{ ...styles.buttonContainer, width }}>{children}</View>;
// }

export default function Card({ word }) {
  const cardColour = getRandomColour();

  return (
    <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          ...styles.card,
          backgroundColor: cardColour,
        }}
        onPress={() => this.card.flip()}
      >
        <MonoText styles={{ ...styles.cardText, ...styles.cardFrontText }}>
          {word.name}
        </MonoText>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          ...styles.card,
          borderColor: cardColour,
        }}
        onPress={() => this.card.flip()}
      >
        <MonoText styles={{ ...styles.cardText, ...styles.cardBackText }}>
          {word.definition}
        </MonoText>
      </TouchableOpacity>
    </CardFlip>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 340,
    height: 300,
  },
  card: {
    width: 340,
    height: 300,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'transparent',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  cardText: {
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  cardFrontText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    lineHeight: 25,
  },
  cardBackText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'black',
    lineHeight: 18,
  },
});
