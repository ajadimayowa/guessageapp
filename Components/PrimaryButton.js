import { useState } from "react";
import { View, TextInput, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
    function buttonPressed() {
        console.log('Primary button pressed')
    }


    return (


        <Pressable android_ripple={true} style={({ pressed }) => pressed ? [styles.tapEffect, styles.testStyle] : styles.buttonStyle} onPress={buttonPressed}>
            <View style={styles.button}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </Pressable>

    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4
    },

    buttonStyle: {
        width: 100,
        height: 45,
        alignItems: 'center',
        backgroundColor: '#2AB858',
        justifyContent: 'center',
        margin: 5,
        elevation: 4,
        borderRadius: 50,
        shadowColor: 'grey',
        shadowOffset: { height: 1, width: 0 },
        shadowRadius: 2,
        shadowOpacity: 1
    },

    text: {
        fontSize: 15,
        fontWeight: '700',
        color: 'white'
    },
    tapEffect: {
        opacity: 0.8
    },
    testStyle: {
        backgroundColor: '#226237',
        width: 100,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 50
    }
})



export default PrimaryButton;