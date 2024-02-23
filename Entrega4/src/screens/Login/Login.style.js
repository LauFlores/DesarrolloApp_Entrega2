import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'
import { sizes } from '../../constants/sizes'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.negro,
    },
    button: {
        backgroundColor: colors.turquesa,
        padding: 10,
        borderRadius: 10,
        shadowColor: colors.blanco,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        color: colors.negro,
        fontSize: sizes.botones,
        textAlign: 'center',
        fontFamily: 'meriendaRegular',
    },
    logo: {
        width: '60%', 
        height: 200, 
        resizeMode: 'contain', 
    },
})