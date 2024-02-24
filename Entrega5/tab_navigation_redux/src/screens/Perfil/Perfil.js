
import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './Perfil.style'
import data from '../../data/miPerfil'


const Perfil = () => {


    return (
        <>
            <View style={styles.container}>
                <View style={styles.perfilContainer}>
                    <View style={styles.perfilImagenContainer}>
                        <Image
                            source={require('../../data/emblema.png')}
                            style={styles.perfilImagen}
                        />
                    </View>
                    <View style={styles.infoNosotrosContainer}>
                        <Text style={styles.nombre}> {data.nombre} </Text>
                        <Text style={styles.biografia}> {data.biografia} </Text>
                    </View>
                </View>

                {/* linea de separacion  */}
                <View style={styles.separacion}></View>
            </View>

        </>
    )
}
export default Perfil