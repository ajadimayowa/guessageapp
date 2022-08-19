import { Pressable, View, Text, StyleSheet, ImageBackground } from "react-native";

function PrimaryButton({ action, style, children }) {
    return (
        <Pressable android_ripple={true} onPress={action}
            style={({ pressed }) => pressed ? [styles.pressed, styles.style,]
                : [styles.button, style]}>
            <View style={[style]}>
                <Text>{children}</Text>
            </View>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    button: {
        width: 250,
        height: 45,
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    pressed: {
        opacity: 0.8,
    },
})

export default PrimaryButton;