import React,{useState} from "react"
import { View,Text,TextInput,Button, ImageBackground } from "react-native"
import {WebBackground,CorpoWeb,InputWeb,Enviar,BotWeb,TextWeb} from './Styles/StyleWeb'
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
    }else{
        return(
            <>
            <WebView source={{uri:url}}/>
            <TextInput  onChangeText={text => setUrl(text)} value={url} placeholder="Coloque aqui a url do site"/>
                <View>
                    <Button onPress={() => setGo(true)} title="Iniciar"/>
                </View>
            </>
        )
    }
}
