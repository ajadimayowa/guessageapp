import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import NumberInput from './Components/NumberInput';
import PreviousGuess from './Components/PreviousGuess';
import PassedModal from './Components/PassModal';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [guesses, updateGuesses] = useState([])
  const [passmodal, setpassmodal] = useState(false)

  function catchUserInput(input) {
    updateGuesses((oldlist) =>
      [...oldlist, { number: input }]
    )

  }

  function togglePassed() {
    setpassmodal(passmodal)

  }

  return (
    <LinearGradient colors={['#2AB858', 'white']} style={styles.container}>
      <ImageBackground source={require('./assets/images/guessappbg.png')} resizeMode='cover'
        style={styles.container} imageStyle={styles.imageBackground}>
        <StartGameScreen />

        <StatusBar style="auto" />
      </ImageBackground>
    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#2AB858'

  },
  imageBackground: {
    opacity: 0.6
  }
});
