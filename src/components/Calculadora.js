import React,{useState,useEffect} from "react"
import { Container } from "../Theme/ThemeDark";
import { View,StyleSheet,Text,TextInput,TouchableHighlight,useColorScheme,ImageBackground } from "react-native"
import {CalculadoraBk,CalcuView,CalcInput,Result,TextResultado,CorpoCalcu} from './Styles/StyleCalculadora'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function Calculadora(){
    const [Numero,setNumero] = useState(0);
    const [Numero2,setNumero2] = useState(0);
    const x = parseInt(Numero)
    const y = parseInt(Numero2)
    var resultado = parseInt(x+y)
    var resultado1 = parseInt(x/y).toFixed(0)
    var resultado2 = parseInt(x%y).toFixed(0)
    var resultado3 = parseInt(x*y)
    var resultado4 = parseInt(x-y)
    if(resultado1,resultado2 =="NaN"){
        resultado = "0";
        resultado1 = "0";
        resultado2 = "0";
        resultado3 = "0";
        resultado4 = "0";
    }
    return(
        <CalculadoraBk  source={require('../../assets/Arquivos/20.jpg')}>
        <CalcuView>
            <CorpoCalcu>
            <CalcInput style={styles.CalcInput} keyboardType="decimal-pad" placeholderTextColor={'rgb(196, 23, 23)'} value={Numero} placeholder="Digite o Primeiro Valor " onChangeText={setNumero}/>
            <CalcInput style={styles.CalcInput}  keyboardType="decimal-pad" placeholderTextColor={'rgb(196, 23, 23)'} value={Numero2} placeholder="Digite o Segundo Valor " onChangeText={setNumero2}/>
            </CorpoCalcu>
            <Result>Resultado</Result>
            <TextResultado>{resultado}</TextResultado>
            <TextResultado>{resultado1}</TextResultado>
            <TextResultado>{resultado2}</TextResultado>
            <TextResultado>{resultado3}</TextResultado>
            <TextResultado>{resultado4}</TextResultado>
            </CalcuView>
            </CalculadoraBk>
    )
}
const styles = StyleSheet.create({
    CalcInput:{
        fontSize:wp("6%"),
    }
})