import { useState } from "react";
import { View, TextInput, Text, Pressable, StyleSheet, Modal } from "react-native";

function PassedModal(props) {
    const [enteredNumber, setEnteredNumber] = useState('')


    return (
        <Modal visible={false} animationType='slide'>
            <View style={styles.container}>
                <Text style={styles.text}>Pass the phone to the second player to guess your number</Text>

                <Pressable style={({ pressed }) => pressed && styles.tapEffect} onPress={props.Modal}>
                    <View style={styles.button}>
                        <Text style={styles.text}>Passed</Text>
                    </View>
                </Pressable>

            </View>
        </Modal>
    )

}

export default PassedModal;

const styles = StyleSheet.create({

    container: {
        width: '50%',
        height: 200,
        backgroundColor: 'red',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    input: {
        height: 45,
        width: 200,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        padding: 5,
        margin: 10,
        color: 'white',
        fontSize: 20
    },

    button: {
        width: 70,
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



