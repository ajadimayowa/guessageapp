import { useState } from "react";
import { View, TextInput, Pressable, StyleSheet, FlatList, Text } from "react-native";

function PreviousGuess(props) {
    const [enteredNumber, setEnteredNumber] = useState('')

    function FlatListHeader() {
        return (
            <View style={styles.listHeader}>
                <Text>Your Previous Guess</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>

            <FlatList style={{ width: '100%' }} ListHeaderComponent={FlatListHeader} bounces={false} stickyHeaderIndices={[0]} data={props.guesses}
                renderItem={(guess) => {
                    return (
                        <View style={styles.guessHolder}>
                            <Text>Your Number {guess.index + 1} Guess is : {guess.item.number}</Text>
                        </View>
                    )

                }} />
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'green',
        alignItems: 'center',
        flexDirection: 'column'
    },
    listHeader: {
        height: 45,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        backgroundColor: 'pink',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 30,
        color: 'white'
    },

    guessHolder: {
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        height: 60,
        width: '100%',
        padding: 20
    },

    button: {
        width: 250,
        height: 45,
        backgroundColor: 'pink'
    },
    text: {
        fontSize: 25
    }
})



export default PreviousGuess;