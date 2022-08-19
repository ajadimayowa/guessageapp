import { View, Text, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons"

function GameOverScreen({ correctGuess, startNewGame }) {
    function restartGame() {
        startNewGame()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>
                Game Over!!! Your Age is
            </Text>
            <Header style={styles.displayStyle}>
                <Text style={styles.largeText}>
                    {correctGuess}
                </Text>

            </Header>
            <PrimaryButton action={restartGame} style={styles.buttonStylesExit}>
                <Text style={styles.buttonText}><Ionicons name="md-home" />Restart</Text></PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 50,
        justifyContent: 'center'
    },
    displayStyle: {
        backgroundColor: 'purple'
    },
    buttonText: {
        color: 'white',
        fontWeight: "600",
        fontFamily: 'montserat-bold',
    },
    largeText: {
        fontFamily: 'montserat-bold',
        fontSize: 60,
        color: 'white'

    },
    titleText: {
        fontFamily: 'montserat-bold',
        textAlign: 'center'
    },
    buttonStyles: {
        backgroundColor: 'green',
        width: 100,
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        overflow: 'hidden',
        elevation: 4,
    },
    buttonStylesPositive: {
        backgroundColor: 'red',
        width: 100,
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        overflow: 'hidden',
        elevation: 4,
    },
    buttonStylesExit: {

        backgroundColor: 'blue',
        width: 100,
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        overflow: 'hidden',
        elevation: 4,

    }
});


export default GameOverScreen;