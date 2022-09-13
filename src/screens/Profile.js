/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Gravatar } from 'react-native-gravatar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    avatar: {
        height: 150,
        width: 150,
        borderRadius: 75,
        marginTop: 100,
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold',
    },
    email: {
        marginTop: 20,
        fontSize: 25,
    },
    button: {
        backgroundColor: '#4286f4',
        marginTop: 30,
        padding: 15,
        borderRadius: 8,
    },
    textButton: {
        fontSize: 20,
        color: 'white',
    },
});


const Profile = () => {
    const logout = () => {}

    const options = {
        email: 'fullname@gmail.com',
        security: true,
    };

    return (
        <View style={styles.container}>
            <Gravatar options={options} style={styles.avatar}/>
            <Text style={styles.nickname}>Fulano de tal</Text>
            <Text style={styles.email}>fullname@gmail.com</Text>
            <TouchableOpacity style={styles.button} onPress={logout}>
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
};


export default Profile;
