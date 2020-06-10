import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import WordInputScreen from './screens/WordInputScreen';
import QuoteInputScreen from './screens/QuoteInputScreen';
import AdviceInputScreen from './screens/AdviceInputScreen';
import Footer from './components/Footer';

export default function App() {
  const [inputs, setInputs] = useState({ show: false, for: '' });

  let content = <HomeScreen setInputs={setInputs} />;

  console.log(inputs.for);

  if (inputs.show) {
    switch (inputs.for) {
      case 'word':
        content = <WordInputScreen />;
        break;
      case 'quote':
        content = <QuoteInputScreen />;
        break;
      case 'advice':
        content = <AdviceInputScreen />;
        break;
      default:
        content = <WordInputScreen />;
    }
  }

  return (
    <View style={styles.container}>
      <Header title="wikiluke" setInputs={setInputs} />
      {content}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: `space-between`,
  },
});
