import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"


function ScrollHeader({ children }) {


    return (
        <View style={[styles.container]}>
            <Text style={styles.titleText}>Your Previous Guesses</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',


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