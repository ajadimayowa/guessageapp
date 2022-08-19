import { View, Text, StyleSheet, ImageBackground } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import InputField from "./InputField";
import { Ionicons } from "@expo/vector-icons"
import { Children } from "react";


function Header({ children, style }) {


    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        padding: 40,
        minWidth: '75%',
        minHeight: 170,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    titleText: {
        fontFamily: 'montserat-bold',
        textAlign: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: "600"
    },
});


export default Header;