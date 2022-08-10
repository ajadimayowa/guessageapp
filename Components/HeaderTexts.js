import colors from "../constants/colors";
import { Text, StyleSheet } from 'react-native'

function HeaderText({ children }) {
    return (
        <Text style={styles.header}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    header: {
        width: 250,
        textAlign: 'center',
        fontSize: 24,
        padding: 10,
        fontWeight: '700',
        color: colors.headerColor,
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'white'
    }
})
export default HeaderText;