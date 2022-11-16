import React,{useState} from "react"
import { View,Text,TextInput,Button, ImageBackground,StyleSheet } from "react-native"
import {WebBackground,CorpoWeb,InputWeb,Enviar,BotWeb,TextWeb} from './Styles/StyleWeb'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {WebView} from 'react-native-webview'
export default function Web(){
    const [url,setUrl] = useState('https://www.linguee.com.br/ingles-portugues/traducao/translate.html');
    const [go,setGo] = useState(false)
    if (go === false){
        return(
            <CorpoWeb>
                <TextWeb>Coloque a url do site</TextWeb>
                <InputWeb placeholderTextColor="#fff" onChangeText={text => setUrl(text)} value={url} placeholder="Coloque a url do site"/>
                <Enviar>
                    <BotWeb onPress={() => setGo(true)}>Iniciar</BotWeb>
                </Enviar>
            </CorpoWeb>
        )
    }
}
const style = StyleSheet.create({
    Background:{
        height: wp("170%"),
      }
})
