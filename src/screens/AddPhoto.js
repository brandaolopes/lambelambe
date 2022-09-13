/* eslint-disable prettier/prettier */
import React, { useState, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    ScrollView,
    Platform,
    Alert,
    TextInput,
} from 'react-native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold',
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').height / 2,
        backgroundColor: '#eee',
        marginTop: 10,
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').height / 2,
        resizeMode: 'center',
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
        borderRadius: 8,
    },
    buttonLabel: {
        fontSize: 20,
        color: 'white',
    },
    input: {
        marginTop: 20,
        width: '90%',
    },
});



const AddPhoto = () => {
    const [image, setImage] = useState(null);
    const [comment, setComment] = useState('');
    const [response, setResponse] = useState(null);

    const pickImageFromGallery = async () => {

      const options = {
        mediaType: 'photo',
      };

      const result = await launchImageLibrary(options);

      if (result?.assets) {
        setResponse(result);
      }
      //tratar o erro depois
    };


    const pickImageFromCamera = async () => {

      const options = {
        mediaType: 'photo',
        saveToPhotos: true,
        cameraType: 'front',
        quality: 1,
      };

      const result = await launchCamera(options);

      if (result?.assets) {
        setResponse(result);
      }
      //tratar o erro depois
    };

    const onButtonPress = () => {
      Alert.alert(
        'Selecione',
        'Informe de onde você quer pegar a foto',
        [
          {
            text: 'Galeria',
            onPress: () => pickImageFromGallery(),
            style: 'default',
          },
          {
            text: 'Câmera',
            onPress: () => pickImageFromCamera(),
            style: 'default',
          },
        ],
        {
          cancelable: true,
          onDismiss: () => console.log('tratar depois...'),
        }
        );
    };

    

    const save = async () => {
        Alert.alert('Imagem Adicionada', comment);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Compartilhe uma imagem</Text>
                <View style={styles.imageContainer}>
                {response?.assets &&
                    response?.assets.map(({uri}) => (
                        <View key={uri} style={styles.image}>
                        <Image
                            resizeMethod="scale"
                            style={styles.image}
                            source={{uri: uri}}
                        />
                        </View>
                    ))}
                </View>
                <TouchableOpacity onPress={() => onButtonPress()} style={styles.button}>
                    <Text style={styles.buttonLabel}>Escolha a foto</Text>
                </TouchableOpacity>
                <TextInput placeholder="Algum comentário para a foto?"
                    style={styles.input} value={comment} onChangeText={setComment}/>
                <TouchableOpacity onPress={save} style={styles.button}>
                    <Text style={styles.buttonLabel}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default AddPhoto;
