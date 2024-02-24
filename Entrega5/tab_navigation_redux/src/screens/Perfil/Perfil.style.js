import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'


export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.fondoClaro,
        padding: 20,
    },
    perfilContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    perfilImagenContainer: {
        width: 135,
        height: 135,
        borderRadius: 50,
        overflow: 'hidden',
    },
    perfilImagen: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    infoNosotrosContainer: {
        flex: 1,
        marginLeft: 20,
    },
    nombre: {
        fontSize: 20,
        fontFamily: 'meriendaRegular',
        color: colors.turquesa,
    },
    biografia: {
        marginTop: 10,
        color: colors.negro,
    },
    separacion: {
        height: 2, 
        backgroundColor: colors.violeta, 
        marginTop: 20,
    },
    containerGeneral: {
        flex: 1,
        backgroundColor: colors.fondoClaro,
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
})
