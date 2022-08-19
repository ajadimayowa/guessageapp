import { View, Text, StyleSheet, ImageBackground, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Header from "../components/Header";
import InputField from "../components/InputField";
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react";
import GameScreen from "./GameScreen";


function Home({ catchUserNumber }) {
    const [userNumber, setUserNumber] = useState()

    function handleUserInput(userinput) {
        setUserNumber(userinput)
    }

    function passUserInput() {
        const userAgeInput = parseInt(userNumber)
        if (isNaN(userAgeInput)) {
            Alert.alert('Player', 'Input Age is Not A Number!')
        } else {
            catchUserNumber(userAgeInput)
        }



    }


    return (
        <View style={styles.container}>

            <Header>
                <Ionicons name="game-controller" size={30} />
                <Text style={styles.titleText}>
                    Enter your Age and i'll try to guess what it is.
                </Text>
            </Header>

            <InputField usernumber={userNumber} handleUserInput={handleUserInput} placeholder={'Enter Age'} />
            <PrimaryButton action={passUserInput} style={styles.buttonStyle} ><Text style={styles.buttonText}>
                Guess Now <Ionicons name="md-arrow-forward-circle" color={'white'} /></Text></PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingVertical: 50,
    },
    titleText: {
        fontFamily: 'montserat-bold',
        textAlign: 'center'
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: "600"
    },
});


export default Home;