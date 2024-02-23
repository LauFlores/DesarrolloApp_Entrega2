import React from 'react';
import { Image, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import styles from './Login.style';

const Login = ({ setLoginHecho }) => {
    const iniciarSesion = () => {

        setLoginHecho(true);
    };

    return (
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent" />
            <Image
                source={require('../../logo.png')}
                style={styles.logo}
            />
            <TouchableOpacity style={styles.button} onPress={iniciarSesion}>
                <Text style={styles.buttonText}>
                    Iniciar Sesión
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
