import { useState } from 'react';
import { StyleSheet, View, Text, Alert, FlatList } from 'react-native'
import PrimaryButton from '../Components/PrimaryButton';
import HeaderText from '../Components/HeaderTexts';
import DisplayNumber from '../Components/DisplayNumber';
import GuessHolder from '../Components/GuessHolder';
import ListHeader from '../Components/ListHeader';
import StartGamescreen from '../screens/StartGameScreen'



let min = 1
let max = 100

function guessedNumber(min, max, exclude) {
    const numberGuessed = Math.floor(Math.random() * (max - min)) + min;

    if (numberGuessed === exclude) {
        return guessedNumber(min, max, exclude)
    } else {
        return numberGuessed;
    }

}

function GoToHome() {
    return (
        <StartGamescreen />
    )
}


function GameScreen({ userNumber, backHome }) {

    const firstGuess = guessedNumber(min, max, userNumber)
    const [generatedNumber, setGeneratedNumber] = useState(firstGuess)
    const [guesses, updateGuesses] = useState([firstGuess])
    console.log(guesses.map((data) => data))

    if (generatedNumber === userNumber) {
        setGeneratedNumber(userNumber)
        Alert.alert('Correct!', 'Game is now over', GoToHome)
    }

    function nextGuess(direction) {

        if ((direction === 'lower' && generatedNumber < userNumber) || (direction === 'higher'
            && generatedNumber > userNumber)) {
            Alert.alert('Player !', 'Dont try to lie')
            return;
        } else


            if (direction === 'lower') {
                let max = generatedNumber

            } else {
                let min = generatedNumber + 1
            }
        const newGuess = guessedNumber(min, max, generatedNumber)
        setGeneratedNumber(newGuess)
        updateGuesses((currentGuess) => [...currentGuess, newGuess])
    }



    function backHomePage() {
        setGeneratedNumber(firstGuess)
        backHome()


    }

    function deleteGuess(numberRemoved) {
        let newGuess = guesses.filter((guesed) => guesed != numberRemoved)
        updateGuesses(newGuess)
    }




    return (
        <View style={styles.container}>
            <HeaderText>Opponent Guess</HeaderText>
            <DisplayNumber>{generatedNumber}</DisplayNumber>
            <Text style={styles.text}>Too High or Too Low</Text>
            <View style={{ flexDirection: 'row' }}>
                <PrimaryButton onPress={nextGuess.bind(this, 'lower')} style={styles.buttonNo}>Go Lower</PrimaryButton>
                <PrimaryButton onPress={nextGuess.bind(this, 'higher')}>Go Higher</PrimaryButton>

            </View>

            <PrimaryButton onPress={backHomePage} style={styles.buttons}>End Game</PrimaryButton>
            <FlatList showsVerticalScrollIndicator={false} bounces={false} stickyHeaderIndices={[0]} style={styles.flatlist} ListHeaderComponent={ListHeader} ListHeaderComponentStyle={styles.listHeader} data={guesses}
                renderItem={(data) => <GuessHolder onPress={deleteGuess.bind(this, data.item)} index={data.index} value={data.item} />} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingVertical: 50
    },
    buttons: {
        backgroundColor: 'blue'
    },
    buttonNo: {
        backgroundColor: 'purple'
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        padding: 10,
        backgroundColor: 'white'
    },
    listHeader: {
        backgroundColor: 'red',
        padding: 20,
        paddingHorizontal: 50,
        width: '120%',
        alignSelf: 'center'

    },
    flatlist: {
        width: '100%',
        paddingHorizontal: 10,
        backgroundColor: 'white',
        opacity: 0.8,


    }
})

export default GameScreen;