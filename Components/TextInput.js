import { useState } from "react";
import { View, TextInput, Text, Pressable, StyleSheet } from "react-native";

function TextInput({ children }) {


    return (
        <View style={styles.container}>

            <Pressable style={({ pressed }) => pressed && styles.tapEffect}>
                <View style={styles.button}>
                    <Text style={styles.text}>{children}</Text>
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



export default TextInput;