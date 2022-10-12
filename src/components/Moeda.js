import React,{useState,useEffect} from "react"
import { Container } from "../Theme/ThemeDark";
import { View,Text,TextInput,TouchableHighlight,useColorScheme,ImageBackground,StyleSheet } from "react-native"
import {CorpoMoeda,MoedaImg,ValorIn,Titulo,Resultado} from './Styles/StyleMoeda'
export default function Moeda(){
    const [Numero,setNumero] = useState(0);
    const [Converter,setConverter] = useState(0);
    const x = parseFloat(Numero)
    const y = parseFloat(Converter)
    const resultado = parseFloat(x/y)
    return(
        <MoedaImg source={require('../../assets/Arquivos/2.jpg')} resizeMode="cover">
        <CorpoMoeda>
            <Titulo>Converter</Titulo>
            <ValorIn keyboardType="decimal-pad" placeholderTextColor={'yellow'} value={Numero} placeholder="Digite o Valor" onChangeText={setNumero}/>
            <ValorIn keyboardType="decimal-pad" placeholderTextColor={'yellow'} value={Converter} placeholder="Converter" onChangeText={setConverter}/>
            <Titulo>Resultado</Titulo>
            <Resultado>{resultado}</Resultado>
        </CorpoMoeda>
        </MoedaImg>
    )
}