import { useState } from "react";
import { View, TextInput, Text, Pressable, StyleSheet } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";

function StartGameScreen(props) {
    const [enteredNumber, setEnteredNumber] = useState('')

    function catchInputNumber(inputNumber) {
        setEnteredNumber(inputNumber)
    }



    function passUserInput() {

        if (enteredNumber != '') {
            setnoInputPlaceholder('white')
            props.catchUserInput(enteredNumber)
            props.togglePassed()
            setnoInputPlaceholder('yellow')
            setEnteredNumber('')
        }
        else {
            console.log('No Age Entered')
            setnoInputPlaceholder('grey')
        }

    }

    return (
        <View style={styles.container}>
            <TextInput placeholder="Enter Age" style={styles.input}
                onChangeText={catchInputNumber} value={enteredNumber}
                placeholderTextColor={'grey'} maxLength={2} keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false} />
            <View style={styles.buttonsContainer}>
                <PrimaryButton>Reset</PrimaryButton>
                <PrimaryButton>Confirm</PrimaryButton>

            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 50,
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
        elevation: 4
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