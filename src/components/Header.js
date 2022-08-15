/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, Platform, Image} from 'react-native';
import icon from '../../assets/imgs/icon.png';

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'android' ? 0 : 20,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#bbb',
        width: '100%',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    title: {
        color: '#000',
        fontFamily:'shelter',
        fontSize: 30,
        height: 30,
    },
});


const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Image source={icon} style={styles.image} />
                <Text style={styles.title}>Lambe-Lambe</Text>
            </View>
        </View>
    );
};


export default Header;
