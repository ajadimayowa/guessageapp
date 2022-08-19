import { View, Text, StyleSheet, ImageBackground } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import InputField from "./InputField";
import { Ionicons } from "@expo/vector-icons"
import { Children } from "react";


function GuessHolder({ guess, number }) {


    return (
        <View style={[styles.container]}>
            <Text style={styles.titleText}>{number}</Text>
            <Text style={styles.titleText}>Current guess is :</Text>
            <Text style={styles.titleText}>{guess}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        padding: 10,
        minWidth: '75%',
        minHeight: 40,
        alignItems: 'center',
        justifyContent: "space-around",
        borderRadius: 5,
        margin: 5,
        flexDirection: 'row'
    },
    titleText: {
        fontFamily: 'montserat-bold',
        textAlign: 'center',
        color: 'white',
    },
    buttonText: {

        fontWeight: "600"
    },
});


export default GuessHolder;