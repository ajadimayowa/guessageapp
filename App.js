import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useEffect } from 'react';
import {
  StyleSheet, Text, View, SafeAreaView,
  Alert, ImageBackground, Dimensions
} from 'react-native';
import Home from './screens/Home';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen'
import { useState } from 'react';


export default function App() {
  let deviceWidth = Dimensions.get('window').width
  let deviceHeight = Dimensions.get('window').height
  const [userNumber, setUserNumber] = useState()
  const [correctGuess, setCorrectGuess] = useState()

  const [fontLoading] = useFonts({
    'montserat-bold': require('./assets/fonts/Montserrat-Bold.otf'),

  })

  if (!fontLoading) {
    return <AppLoading />
  }

  let screen = <Home catchUserNumber={catchUserNumber} />

  function endGame(correctguess) {
    setCorrectGuess(correctguess)
    setUserNumber()
  }

  function startNewGame() {
    setCorrectGuess()
    setUserNumber()
  }

  function catchUserNumber(theInputAge) {
    setUserNumber(theInputAge)
    console.log(theInputAge)
  }

  if (userNumber) {
    screen = <GameScreen userAge={userNumber} endGame={endGame} newGame={startNewGame} />
  }
  if (!userNumber && correctGuess) {
    screen = <GameOverScreen correctGuess={correctGuess} startNewGame={startNewGame} />
  }



  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='cover' style={styles.container} source={require('./assets/images/bg-image.png')}>
        <SafeAreaView style={styles.container}>
          {screen}
          <StatusBar style="dark" />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
