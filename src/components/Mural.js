import React,{useState,useEffect} from 'react'
import { View,Text,Button,Image } from "react-native";
import * as ImagePicker from 'expo-image-picker'
export default function Mural(){
    const [hasGalleryPermission,setHasGalleryPermission] = useState(null);
    const [image,setImage] = useState(null);
    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');

        })();
    },[]);
    const pickImage = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        });
        if (!result.cancelled){
            setImage(result.uri)
        }
    };
    if (hasGalleryPermission === false){
        return <Text>Acesso Negado</Text>
    }
    return(
    <View>
       <Button title='Pick Image' onPress={pickImage()}/>
       {image && <Image source={{uri:image}}/>}
    </View>
    )
}