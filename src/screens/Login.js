/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#eee',
        borderColor: '#333',
        borderWidth: 1,
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
        borderRadius: 8,
    },
    textButton: {
        fontSize: 20,
        color: '#fff',
    },
});

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        
    };


    return (
        <View style={styles.container}>
            <TextInput placeholder="Email" style={styles.input}
                autoFocus={true}
                keyboardType="email-address"
                value={email}
                onChangeText={text => {setEmail(text);}}/>
            <TextInput placeholder="Senha" style={styles.input}
                autoFocus={true}
                secureTextEntry={true}
                value={password}
                onChangeText={text => {setPassword(text);}}/>

            <TouchableOpacity onPress={login} style={styles.button}>
                <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
                <Text style={styles.textButton}>Criar Conta</Text>
            </TouchableOpacity>
        </View>
    );

};


export default Login;
