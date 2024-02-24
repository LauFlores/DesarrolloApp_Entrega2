import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'
import { sizes } from '../../constants/sizes'

export default styles = StyleSheet.create({
    containerGeneral: {
        flex: 1,
        backgroundColor: colors.fondoClaro,
    },
    container: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.violeta,
        borderRadius: 10,
        margin: 10,
        backgroundColor: colors.blanco,
    },
    leftContainer: {
        flex: 1,
    },
    rightContainer: {
        flex: 2,
    },
    perfil: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icono: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    titulo: {
        fontFamily: 'meriendaRegular',
        fontSize: 16,
        color: colors.turquesa,
    },
    nombreMarca: {
        color: colors.negro,
        opacity: 0.7,
    },
    textoPaleta: {
        fontSize: 18,
        lineHeight: 24,
        marginBottom: 10,
        color: colors.negro,
    },
    imagenPaleta: {
        aspectRatio: 1,
        resizeMode: 'cover',
        borderRadius: 10,
        height: 120,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    button: {
        backgroundColor: colors.turquesa,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: colors.negro,
        fontWeight: 'bold',
        marginRight: 10,
        fontSize: sizes.botones,
        textAlign: 'center',
    },
    textoStock: {
        color: colors.negro,
        opacity: 0.7,
    }
})
