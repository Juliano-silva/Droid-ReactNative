import React,{useState} from "react"
import { View,Text,TextInput,Button, ImageBackground } from "react-native"
import {QRCorpo,QRBackground,InputQr,QRButton,QCodeView} from './Styles/StyleQR'
import QRCode from 'react-native-qrcode-svg'
import { ScrollView } from "react-native-gesture-handler"
export default function QCode(){
    const [inputTexto,setInputTexto] = useState('')
    const [qrValue,setQrValue] = useState('')
    return(
        <QRBackground source={require('../../assets/Arquivos/11.jpg')}>
        <ScrollView>
        <View>
            <QCodeView>
            <QRCode 
            value={qrValue ? qrValue : 'Na'}
            color="black"
            background="white"
            logoSize = {30}
            size={380}
            />
            </QCodeView>
            <QRCorpo>
               <InputQr onChangeText={(inputTexto) => setInputTexto(inputTexto)} placeholder="Escreva algo" value={inputTexto}/>
               <QRButton onPress={() => setQrValue(inputTexto)}> CRIAR UM QRCODE</QRButton>
            </QRCorpo>
        </View>
        </ScrollView>
        </QRBackground>
    )
}