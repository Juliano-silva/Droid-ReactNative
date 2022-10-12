import React,{useState} from "react";
import { View,Text,Button,TextInput } from "react-native";
import * as Speech from 'expo-speech'
export default function Falar(){
    const [text,setText] = useState('Olá,Mundo')
    function Falar(){
        Speech.speak(text,{
            language: 'pt-BR'
        });
    }
    function FalarIngles(){
        Speech.speak(text,{
            language: 'es'
        });
    }
    function FalarJapao(){
        Speech.speak(text,{
            language: 'ja-JP'
        });
    }
    return(
    <View>
        <Text>Falar</Text>
        <TextInput onChangeText={e => setText(e)} placeholder="Digite Algo"/>
        <Button title="Falar" onPress={Falar}/>
        <Button title="Falar no Inglês" onPress={FalarIngles}/>
        <Button title="Falar no Japão" onPress={FalarJapao}/>
    </View>
    )
}