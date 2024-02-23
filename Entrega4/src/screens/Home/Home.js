import React from 'react'
import { Image, Text, View, FlatList, TouchableOpacity } from 'react-native'
import styles from './Home.style'
import data from '../../data/paletas'
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Home = ({ route }) => {
    const { setLoginHecho } = route.params
    const navigation = useNavigation()

    const renderEkos = ({ item }) => (
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
                <Image source={item.portada} style={styles.portadaPaleta} />
            </View>
        </View>
    )

    const cerrarSesion = () => (
        setLoginHecho(false)
    )

    return (
        <>
            {/* paletas (listado) */}
            <View style={styles.containerGeneral}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={renderEkos}
                />
            </View>

            {/* los botones de abajo */}
            <View style={styles.buttonContainer}>

                {/* mi perfil */}
                <TouchableOpacity style={styles.buttonMiPerfil} onPress={() => navigation.navigate('Perfil')}>
                    <Text style={styles.buttonTextMiPerfil}> Nosotros </Text>
                    <MaterialCommunityIcons name="human-greeting-variant" size={30} color="black" />
                </TouchableOpacity>

                {/* cerrar sesion */}
                <TouchableOpacity style={styles.button}>
                    <Text
                        style={styles.buttonText}
                        onPress={cerrarSesion}>
                        Cerrar Sesión
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
export default Home