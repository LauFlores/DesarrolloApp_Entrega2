import React from 'react'
import { Image, Text, View, FlatList, TouchableOpacity } from 'react-native'
import styles from './Home.style'
import data from '../../data/paletas'
import { useDispatch, useSelector } from 'react-redux'
import { cerrarSesion } from '../../features/LoginReducer'

const Home = () => {

    const renderPaletas = ({ item }) => (
        <View style={styles.container}>
            <View style={styles.rightContainer}>
                <View style={styles.perfil}>
                    <Image source={item.icono} style={styles.icono} />
                    <View>
                        <Text style={styles.titulo}>{item.nombre}</Text>
                        <Text style={styles.nombreMarca}>{item.marca}</Text>
                    </View>
                </View>
                <Text style={styles.textoPaleta}>Precio: {item.precio}</Text>
                <Text style={styles.textoStock}> {item.stock} </Text>
            </View>
            <View style={styles.leftContainer}>
                <Image source={item.imagen} style={styles.imagenPaleta} />
            </View>
        </View>
    )

    const loginHecho = useSelector(state => state.login.loginHecho);
    const dispatch = useDispatch();

    const funcionCerrarSesion = () => {
        console.log('Valor de loginHecho antes de cerrar sesion:', loginHecho);
        dispatch(cerrarSesion())
        console.log('Valor de loginHecho después de cerrar sesion:', loginHecho);
    }

    return (
        <>
            {/* paletas (posteos) */}
            <View style={styles.containerGeneral}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={renderPaletas}
                />
            </View>

            {/* los botones de abajo */}
            <View style={styles.buttonContainer}>
                {/* cerrar sesion */}
                <TouchableOpacity style={styles.button}>
                    <Text
                        style={styles.buttonText}
                        onPress={funcionCerrarSesion}>
                        SALIR
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
export default Home