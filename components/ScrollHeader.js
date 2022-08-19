import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"


function ScrollHeader({ children }) {


    return (
        <View style={[styles.container]}>
            <Text style={styles.titleText}>Your Guesses</Text>
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
        justifyContent: 'center',
        borderRadius: 5,
        margin: 5
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


export default ScrollHeader;