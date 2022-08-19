import { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

function InputField({ placeholder, usernumber, handleUserInput }) {

    return (
        <TextInput onChangeText={handleUserInput} style={styles.input} placeholder={placeholder} keyboardType="number-pad"
            maxLength={2} value={usernumber} />
    )
}

const styles = StyleSheet.create({
    input: {
        textAlign: 'center',
        minWidth: '50%',
        maxHeight: 45,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        fontFamily: 'montserat-bold',

    }

})
export default InputField;