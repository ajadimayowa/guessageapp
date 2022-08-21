import {
    View, Text, StyleSheet, Alert, FlatList, SafeAreaView,
    ScrollView, useWindowDimensions
}
    from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import GuessHolder from '../components/GuessHolder';
import ScrollHeader from '../components/ScrollHeader';

let min = 1
let max = 100
// let deviceHeight = Dimensions.get('window').height
// let deviceWidth = Dimensions.get('window').width

function GameScreen({ endGame, userAge, newGame }) {
    const { width, height } = useWindowDimensions()



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

    const deviceResponseColor = width > 500 ? 'green' : 'red';
    const deviceResponseSize = width > 500 ? '90%' : 400;

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }} bounces={false} style={{ flex: 1, width: '100%', }}>
                <Header style={[styles.displayStyle, { backgroundColor: deviceResponseColor, maxWidth: deviceResponseSize }]}>
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

                <View style={{ alignItems: 'flex-start', width: deviceResponseSize, paddingHorizontal: 10 }}>
                    <ScrollHeader />
                </View>
                <View style={{ width: deviceResponseSize, paddingHorizontal: 10, backgroundColor: 'green' }}>
                    <FlatList horizontal={true} data={guessList} renderItem={(guesses) => <GuessHolder
                        guess={guesses.item} number={guesses.index + 1} />} />
                </View>

                {/* <ScrollView showsVerticalScrollIndicator={false} StickyHeaderComponent={<ScrollHeader />}>

                {guessList.map((guess) => <GuessHolder key={guess}>{guess}</GuessHolder>)}
            </ScrollView> */}

                <PrimaryButton style={styles.buttonStylesExit} action={newGame}>
                    <Text style={styles.buttonText}><Ionicons name="md-home" /> End game</Text></PrimaryButton>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20
    },
    displayStyle: {
        maxWidth: '20%',
    },
    listContentStyles: {
        backgroundColor: 'green',
        flexGrow: 1,
        alignItems: 'flex-start',

        minWidth: '90%',
        padding: 20

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