import { View, StyleSheet, Text } from 'react-native';
import colors from '../constants/colors';

function DisplayNumber({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: 300,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    text: {
        color: colors.text,
        fontSize: 60,
        fontWeight: '500'
    }
})
export default DisplayNumber;