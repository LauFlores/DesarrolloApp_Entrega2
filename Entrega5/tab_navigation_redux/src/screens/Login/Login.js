import React, { useState, useRef } from 'react';
import { Image, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import styles from './Login.style';
import { useDispatch, useSelector } from 'react-redux';
import { iniciarSesion } from '../../features/LoginReducer';

const Login = () => {
    const loginHecho = useSelector(state => state.login.loginHecho);
    const dispatch = useDispatch();

    const funcionIniciarSesion = () => {
        console.log('Valor de loginHecho antes de iniciar sesion:', loginHecho);
        dispatch(iniciarSesion());
        console.log('Valor de loginHecho después de iniciar sesion:', loginHecho);
    };

    return (
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent" />
            <Image
                source={require('../../logo.png')}
                style={styles.logo}
            />
            <TouchableOpacity style={styles.button}>
                <Text 
                    style={styles.buttonText} 
                    onPress={funcionIniciarSesion}>
                    ENTRAR
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;