import { useState } from "react";
import { View, TextInput, Text, Pressable, StyleSheet } from "react-native";

function NumberInput({ children }) {
    const [enteredNumber, setEnteredNumber] = useState('')
    const [noInputPlaceholder, setnoInputPlaceholder] = useState('white')

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
            <TextInput placeholder="Enter Any Number" style={styles.input}
                onChangeText={catchInputNumber} value={enteredNumber} placeholderTextColor={noInputPlaceholder} />

            <Pressable style={({ pressed }) => pressed && styles.tapEffect}>
                <View style={styles.button}>
                    <Text style={styles.text}>Done</Text>
                </View>
            </Pressable>

        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 45,
        width: 250,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        padding: 5,
        margin: 10,
        color: 'white',
        fontSize: 20
    },

    button: {
        width: 350,
        height: 45,
        alignItems: 'center',
        backgroundColor: 'pink',
        justifyContent: 'center'
    },

    text: {
        fontSize: 25
    },
    tapEffect: {
        opacity: 0.8
    }
})



export default NumberInput;