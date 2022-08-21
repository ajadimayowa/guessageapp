import {
    View, Text, StyleSheet, Alert, Image,
    useWindowDimensions, ScrollView
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons"

function GameOverScreen({ correctGuess, startNewGame }) {
    function restartGame() {
        startNewGame()
    }
    const { width } = useWindowDimensions()

    let content = (
        <>

            <Image resizeMode="contain" style={[styles.imageStyle]}
                source={require('../assets/images/gameover-image.png')} />
            <Text style={styles.titleText}>
                Your Age is
            </Text>
            <Header style={styles.displayStyle}>
                <Text style={styles.largeText}>
                    {correctGuess}
                </Text>

            </Header>


            <PrimaryButton action={restartGame} style={styles.buttonStylesExit}>
                <Text style={styles.buttonText}><Ionicons name="md-home" />Restart</Text></PrimaryButton>
        </>)
    if (width > 500) {
        let displayWidth = 300
        content = (
            <>
                <Image resizeMode="contain" style={[styles.imageStyle, {
                    width: 100, height: 100,
                    borderRadius: 50
                }]}
                    source={require('../assets/images/gameover-image.png')} />
                <Header style={[styles.displayStyle, { minWidth: displayWidth }]}>
                    <Text style={styles.titleText}>
                        Your Age is
                    </Text>
                    <Text style={styles.largeText}>
                        {correctGuess}
                    </Text>

                </Header>
                <PrimaryButton action={restartGame} style={styles.buttonStylesExit}>
                    <Text style={styles.buttonText}><Ionicons name="md-home" />Restart</Text></PrimaryButton>
            </>
        )
    }

    return (
        <ScrollView contentContainerStyle={styles.container} style={{ flex: 1 }}>
            {content}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingVertical: 50,
        justifyContent: 'center'
    },
    imageStyle: {
        margin: 10,
        backgroundColor: 'blue',
        maxHeight: 150,
        maxWidth: 150,
        borderRadius: 80,
        padding: 40
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