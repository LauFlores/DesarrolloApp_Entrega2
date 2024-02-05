import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const ThemeOptions = ({ currentTheme, onSelectTheme }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const themes = [
        { label: 'Tema Verde', value: '#556B2F' }, //556B2F 
        { label: 'Tema Negro', value: '#000000' },
        { label: 'Tema Gris', value: '#808080' },
    ];

    const getTextColor = (theme) => {
        return theme === '#FFFFFF' ? '#000000' : '#FFFFFF';
    };

    return (
        <View style={styles.container}>
        <Text style={[styles.title, { color: getTextColor(currentTheme) }]}>Personalización del Tema</Text>
        <TouchableOpacity style={styles.dropdownButton} onPress={() => setModalVisible(true)}>
            <Text style={[styles.selectedTheme, { color: getTextColor(currentTheme) }]}>Seleccionar Tema</Text>
        </TouchableOpacity>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(false);
            }}>
            <View style={styles.modalContainer}>
            {themes.map((theme, index) => (
                <TouchableOpacity
                key={index}
                style={[styles.themeButton, { backgroundColor: theme.value }]}
                onPress={() => {
                    setModalVisible(false);
                    onSelectTheme(theme.value);
                }}>
                <Text style={styles.themeButtonText}>{theme.label}</Text>
                </TouchableOpacity>
            ))}
            </View>
        </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    dropdownButton: {
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    selectedTheme: {
        textAlign: 'center',
    },
    modalContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    themeButton: {
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    themeButtonText: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
});

export default ThemeOptions;
