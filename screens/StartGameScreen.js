import { useState } from "react";
import { View, TextInput, Text, Pressable, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";

function StartGameScreen({ onNumberPicked }) {
    const [enteredNumber, setEnteredNumber] = useState('');
    const [userInputAge, setUserInputAge] = useState();


    function catchInputNumber(inputNumber) {

        if (inputNumber <= 0 || isNaN(enteredNumber)) {
            Alert.alert('Invalid Input', 'Your input must be less than 90 and an integer',
                [{ text: 'Ok', style: 'destructive' }])
            setEnteredNumber('')
        } else {
            setEnteredNumber(inputNumber);
            setUserInputAge(parseInt(inputNumber))
        }

    }

    function resetInput() {
        setEnteredNumber('')
    }



    function passUserInputAsInt() {
        onNumberPicked(userInputAge)
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder="Enter Age" style={styles.input}
                onChangeText={catchInputNumber} value={enteredNumber}
                placeholderTextColor={'grey'} maxLength={2} keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false} />
            <View style={styles.buttonsContainer}>
                <PrimaryButton onPress={resetInput} >Reset</PrimaryButton>
                <PrimaryButton onPress={passUserInputAsInt}>Confirm</PrimaryButton>

            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 80,
        borderRadius: 8,
        padding: 16,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 4,
    },
    input: {
        height: 45,
        width: 150,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: 'green',
        paddingBottom: -10,
        padding: 5,
        margin: 10,
        color: 'grey',
        fontSize: 20,
        textAlign: 'center',

    },

    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },


    text: {
        fontSize: 25
    },
    tapEffect: {
        opacity: 0.8
    }
})



export default StartGameScreen;