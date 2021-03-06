import React from 'react';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import WordInputScreen from './screens/WordInputScreen';
import QuoteInputScreen from './screens/QuoteInputScreen';
import AdviceInputScreen from './screens/AdviceInputScreen';
import LearningInputScreen from './screens/LearningInputScreen';
import VocabulousScreen from './screens/VocabulousScreen';
import Footer from './components/Footer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Colours from './constants/colours';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Header title="wikiluke" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Words"
          component={WordInputScreen}
          options={{ title: 'Add a Word', headerTintColor: Colours.green }}
        />
        <Stack.Screen
          name="Quotes"
          component={QuoteInputScreen}
          options={{ title: 'Add a Quote', headerTintColor: Colours.yellow }}
        />
        <Stack.Screen
          name="Advice"
          component={AdviceInputScreen}
          options={{ title: 'Add Advice', headerTintColor: Colours.red }}
        />
        <Stack.Screen
          name="Learnings"
          component={LearningInputScreen}
          options={{ title: 'Add a Learning', headerTintColor: Colours.purple }}
        />
         <Stack.Screen
          name="Vocabulous"
          component={VocabulousScreen}
          options={{ title: 'Vocabulous', headerTintColor: Colours.brown }}
        />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}
