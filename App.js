import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';
import { StyleSheet, SafeAreaView } from 'react-native';
import NumberInput from './Components/NumberInput';
import PreviousGuess from './Components/PreviousGuess';
import PassedModal from './Components/PassModal';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [guesses, updateGuesses] = useState([])
  const [passmodal, setpassmodal] = useState(false)
  const [ageInput, setAgeInput] = useState()

  let screen = <StartGameScreen onNumberPicked={catchAgeInput} />

  function catchAgeInput(inputValue) {
    setAgeInput(inputValue)
  }

  function backToHome() {
    setAgeInput()
  }



  if (ageInput) {
    screen = <GameScreen userNumber={ageInput} backHome={backToHome} buttonStyle={styles.button} />
  }

  function togglePassed() {
    setpassmodal(passmodal)

  }



  return (
    <LinearGradient colors={['#2AB858', 'blue']} style={styles.container}>
      <ImageBackground source={require('./assets/images/guessappbg.png')} resizeMode='cover'
        style={styles.container} imageStyle={styles.imageBackground}>
        <SafeAreaView style={styles.container}>

          {screen}

        </SafeAreaView >
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
  },
  imageBackground: {
    opacity: 0.6
  },
  button: {
    backgroundColor: 'red'
  }
});
