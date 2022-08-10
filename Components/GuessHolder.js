import { View, Text, StyleSheet, Pressable } from 'react-native';

function GuessHolder({ index, value, onPress }) {
    function check() {
        console.log('Here!')
    }

    return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed ? [styles.buttonPressed, styles.holder] : styles.holder}>
            <View style={styles.holder}>
                <Text style={styles.texts}>{index + 1}</Text>
                <Text style={styles.texts}>Current Guess :</Text>
                <Text style={styles.texts}>{value}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    holder: {
        width: '100%',
        height: 80,
        margin: 5,
        backgroundColor: 'blue',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        padding: 15,
        justifyContent: 'space-around',
        shadowColor: 'red',
        shadowRadius: 5,
        shadowOffset: { height: 3, width: 1 },

        elevation: 5




    },
    buttonPressed: {
        opacity: 0.8
    },

    texts: {
        color: 'white',
        fontSize: 20
    }
})

export default GuessHolder;