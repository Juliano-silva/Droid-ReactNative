import React,{useState} from "react";
import { View,Text,Button,TextInput, ImageBackground } from "react-native";
import {FalarBK,FalarCorpo,BotaoFla,InputFalar,CorpoFalarView} from './Styles/StyleFalar'
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
    function FalarRusso(){
        Speech.speak(text,{
            language: 'ru'
        });
    }
    function FalarItaliano(){
        Speech.speak(text,{
            language: 'it'
        });
    }
    function FalarFrances(){
        Speech.speak(text,{
            language: 'ff'
        });
    }
    return(
    <FalarBK source={require("../../assets/Arquivos/5.jpg")}>
    <FalarCorpo>
        <InputFalar placeholderTextColor="blue" onChangeText={e => setText(e)} placeholder="Digite Algo"/>
        <CorpoFalarView>
        <BotaoFla onPress={Falar}>Falando em Brasileiro</BotaoFla>
        <BotaoFla onPress={FalarIngles}>Falando em Inglês</BotaoFla>
        <BotaoFla onPress={FalarItaliano}>Falar em Italiano</BotaoFla>
        <BotaoFla onPress={FalarJapao}>Falando em Japones</BotaoFla>
        <BotaoFla onPress={FalarRusso}>Falando em Russo</BotaoFla>
        <BotaoFla onPress={FalarFrances}>Falando em Frances</BotaoFla>
        </CorpoFalarView>
    </FalarCorpo>
    </FalarBK>
    )
}