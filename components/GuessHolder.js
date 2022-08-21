import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import InputField from "./InputField";
import { Ionicons } from "@expo/vector-icons"
import { Children } from "react";


function GuessHolder({ guess, number }) {


    return (
        <TouchableOpacity>
            <View style={[styles.container]}>
                <Text style={styles.titleText}>#{number}</Text>
                <Text style={styles.titleText}>Current guess is :{guess}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        padding: 10,
        height: 200,

        alignItems: 'center',
        justifyContent: "space-around",
        borderRadius: 5,
        margin: 5,

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