import { View, Text, StyleSheet, Alert, FlatList, ScrollView, SafeAreaView } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import GuessHolder from '../components/GuessHolder';
import ScrollHeader from '../components/ScrollHeader';

let min = 1
let max = 100

function GameScreen({ endGame, userAge, newGame }) {


    function generateNumber(max, min, exclude) {
        const initialGuess = Math.floor((Math.random() * (max - min))) + min
        if (initialGuess === exclude) {
            return generateNumber(max, min, exclude)
        }
        else return initialGuess

    }

    function gotoHome() {
        endGame(guessedAge)
    }

    let firstGuess = generateNumber(100, 1, userAge)
    const [guessedAge, setGuessedAge] = useState(firstGuess)
    const [guessList, setGuessList] = useState([guessedAge])
    console.log(guessList)

    useEffect(() => {
        if (guessedAge == userAge) {
            Alert.alert('Success!', 'Guess is correct!!');

            endGame(guessedAge)
        }
    }, [guessedAge, userAge])


    function nextGuess(direction) {

        if ((direction === 'higher' && guessedAge > userAge) || (direction === 'lower' &&
            guessedAge < userAge)) {
            Alert.alert('Player!', 'Dont lie!!')
            return;
        }

        if (direction === 'lower') {
            console.log('going down')
            max = guessedAge
        }

        else {
            console.log('going up')
            min = guessedAge + 1
        }

        let nextGuess = generateNumber(max, min)

        setGuessedAge(nextGuess)
        setGuessList((currentGuess) => [nextGuess, ...currentGuess])
    }

    return (
        <SafeAreaView style={styles.container}>

            <Header style={styles.displayStyle}>
                <Text style={styles.titleText}>
                    Your Age is
                </Text>
                <Text style={styles.largeText}>
                    {guessedAge}
                </Text>

            </Header>
            <Text style={styles.titleText}>
                Close enough?
            </Text>
            <View style={{ flexDirection: 'row' }}>
                <PrimaryButton style={styles.buttonStyles} action={nextGuess.bind(this, 'higher')}>
                    <Text style={styles.buttonText}> <Ionicons name="md-arrow-up" />Go Higher</Text></PrimaryButton>
                <PrimaryButton style={styles.buttonStylesPositive} action={nextGuess.bind(this, 'lower')}>
                    <Text style={styles.buttonText}><Ionicons name="md-arrow-down" /> Go Lower</Text></PrimaryButton>

            </View>


            <FlatList showsVerticalScrollIndicator={false} style={styles.listStyles} data={guessList} renderItem={(guesses) => <GuessHolder
                guess={guesses.item} number={guesses.index + 1} />} />
            {/* <ScrollView showsVerticalScrollIndicator={false} StickyHeaderComponent={<ScrollHeader />}>

                {guessList.map((guess) => <GuessHolder key={guess}>{guess}</GuessHolder>)}
            </ScrollView> */}

            <PrimaryButton style={styles.buttonStylesExit} action={newGame}>
                <Text style={styles.buttonText}><Ionicons name="md-home" /> End game</Text></PrimaryButton>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20
    },
    listStyles: {
        backgroundColor: 'yellow',
        width: '100%',
        minHeight: 200,
        padding: 5
    },
    displayStyle: {
        backgroundColor: 'purple'
    },
    buttonText: {
        color: 'white',
        fontWeight: "600",
        fontFamily: 'montserat-bold',
    },
    largeText: {
        fontFamily: 'montserat-bold',
        fontSize: 60,

    },
    titleText: {
        fontFamily: 'montserat-bold',
        textAlign: 'center'
    },
    buttonStyles: {
        backgroundColor: 'green',
        width: 100,
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        overflow: 'hidden',
        elevation: 4,
    },
    buttonStylesPositive: {
        backgroundColor: 'red',
        width: 100,
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        overflow: 'hidden',
        elevation: 4,
    },
    buttonStylesExit: {

        backgroundColor: 'red',
        width: 100,
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        overflow: 'hidden',
        elevation: 4,

    }
});


export default GameScreen;