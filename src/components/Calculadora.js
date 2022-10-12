import React,{useState,useEffect} from "react"
import { Container } from "../Theme/ThemeDark";
import { View,StyleSheet,Text,TextInput,TouchableHighlight,useColorScheme,ImageBackground } from "react-native"
export default function Calculadora(){
    const [Numero,setNumero] = useState(0);
    const [Numero2,setNumero2] = useState(0);
    const x = parseInt(Numero)
    const y = parseInt(Numero2)
    const resultado = parseInt(x+y)
    const resultado1 = parseInt(x/y)
    const resultado2 = parseInt(x%y)
    const resultado3 = parseInt(x*y)
    const resultado4 = parseInt(x-y)
    return(
        <ImageBackground  source={require('../../assets/Arquivos/20.jpg')}>
        <View>
            <Text>Converter</Text>
            <TextInput keyboardType="decimal-pad" placeholderTextColor={'yellow'} value={Numero} placeholder="Digite o Valor: " onChangeText={setNumero}/>
            <TextInput keyboardType="decimal-pad" placeholderTextColor={'yellow'} value={Numero2} placeholder="Quanto você quer converter: " onChangeText={setNumero2}/>
            <Text>Resultado</Text>
            <Text>{resultado}</Text>
            <Text>{resultado1}</Text>
            <Text>{resultado2}</Text>
            <Text>{resultado3}</Text>
            <Text>{resultado4}</Text>
            </View>
            </ImageBackground>
    )
}