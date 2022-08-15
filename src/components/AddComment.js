/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons/faCommentDots';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons/faCircleXmark';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    row: {
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#ccc',
    },
    input: {
        width: '90%',
    },
});


const AddComment = () => {

    const [comment, setComment] = useState('');
    const [editMode, setEditMode] = useState(false);

    const handleAddComment = () => {
        Alert.alert('Adicionado!', comment);
    };

    let commentArea = null;

    if (editMode) {
        commentArea = (
            <View style={styles.container}>
                <TextInput placeholder="Digite um comentário..."
                    style={styles.input}
                    value={comment}
                    onChangeText={(text) => {setComment(text)}}
                    onSubmitEditing={handleAddComment}/>
                <Pressable onPress={() => { setEditMode(false);}}>
                    <FontAwesomeIcon icon={ faCircleXmark } size={15} color={'#555'} />
                </Pressable>
            </View>
        );
    } else {
        commentArea = (
            <Pressable onPress={() => { setEditMode(true);}}>
                <View style={styles.row}>
                    <FontAwesomeIcon icon={ faCommentDots } size={25} color={'#555'} />
                    <Text style={styles.caption}>Adicione um comentário...</Text>
                </View>
            </Pressable>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            {commentArea}
        </View>
    );
};

export default AddComment;
