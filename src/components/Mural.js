import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, ImageBackground } from 'react-native';
import {MuralBk,CorpoMural,ButtonMural,ImageMural} from './Styles/StyleMural'
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <MuralBk source={require("../../assets/Arquivos/7.jpg")}>
    <CorpoMural style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {image && <ImageMural source={{ uri: image }}/>}
        <ButtonMural onPress={pickImage}>Adicionar uma Imagem</ButtonMural>
    </CorpoMural>
    </MuralBk>
  );
}