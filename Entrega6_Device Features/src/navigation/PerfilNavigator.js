import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../constants/colors';

const Stack = createNativeStackNavigator();

const PerfilNavigator = () => {
    const [imagen, setImagen] = useState(null);
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');

    const tomarFoto = async () => {
        const verificacionPermisos = await ImagePicker.requestCameraPermissionsAsync();
        if (verificacionPermisos.granted) {
            let foto = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [1, 1],
                base64: true,
                quality: 1,
            });
            if (!foto.cancelled) {
                setImagen(`data:image/jpeg;base64,${foto.assets[0].base64}`);
            }
        }
    }

    return (
        <Stack.Navigator
            initialRouteName="PerfilStack"
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <Stack.Screen
                name="PerfilStack"
                options={{
                    title: 'Mi Perfil',
                    headerStyle: { backgroundColor: colors.negro },
                    headerTintColor: colors.blanco,
                    headerTitleStyle: { fontWeight: 'bold' },
                }}
            >
                {() => (
                    <View style={styles.container}>
                        <Text style={styles.titulo}>¡Mi perfil!</Text>
                        {imagen ? (
                            <Image source={{ uri: imagen }} style={styles.imagenEstilo} />
                        ) : (
                            <Image source={require('../usuario.png')} style={styles.imagenEstilo} />
                        )}
                        <TouchableOpacity style={styles.botonCamara} onPress={tomarFoto}>
                            <Text style={styles.textoBoton}>Tomar una foto</Text>
                        </TouchableOpacity>

                        {/* Agregar campos de entrada para el nombre y el correo electrónico */}
                        <TextInput
                            style={styles.input}
                            placeholder="Nombre"
                            value={nombre}
                            onChangeText={setNombre}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Correo electrónico"
                            value={correo}
                            onChangeText={setCorreo}
                            keyboardType="email-address"
                        />
                    </View>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 20,
    },
    imagenEstilo: {
        width: 250,
        height: 250,
        borderRadius: 60,
        marginTop: 20,
    },
    botonCamara: {
        marginTop: 20,
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 20,
    },
    textoBoton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        paddingHorizontal: 10,
    },
});

export default PerfilNavigator;

