import { View, Text, StyleSheet } from 'react-native';

function ListHeader() {
    return (
        <View>
            <Text style={styles.texts}>
                Computer Guesses
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    texts: {
        color: 'white',
        fontWeight: '600',
        fontSize: 20
    }
})

export default ListHeader;