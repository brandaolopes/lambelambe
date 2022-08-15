/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

const Feed = () => {

    const [posts, setPosts] = useState([
        { id: Math.random(),
            nickname: 'Bruno Brandão',
            email: 'bruno@bruno.com',
            image: require('../../assets/imgs/boat.jpg'),
            comments: [{
                nickname: 'Ray Sheldon',
                comment: 'Show!',
            }, {
                nickname: 'Lilian Arruda',
                comment: 'Que foto massa!',
            }],
        }, {
            id: Math.random(),
            nickname: 'Maria Solange',
            email: 'sol@bruno.com',
            image: require('../../assets/imgs/gate.jpg'),
            comments: [],
        },
    ]);

    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={posts}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) =>
                <Post key={item.id} {...item} />}/>
        </View>
    );
};

export default Feed;
