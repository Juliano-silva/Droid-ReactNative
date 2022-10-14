import React,{useState} from "react";
import { View,Text,TouchableOpacity,TextInput,Button, ImageBackground,ScrollView } from "react-native";
import {SenhaCorpo,SenhaBk,GerarS,InputGerar,GerarSenha} from './Styles/StyleSenha'
import * as Clipboard from 'expo-clipboard'
function geraStringAleatoria(tamanho) {
    var stringAleatoria = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; 
    for (var i = 0; i < tamanho; i++) {
       stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
}
const GeradorSenha = () => {
    const [Senha,Gerar] = React.useState(12)
    return(
      <SenhaBk source={require("../../assets/Arquivos/6.jpg")}>
    <SenhaCorpo>
        <GerarS>Gerar Senha</GerarS>
        <InputGerar keyboardType="decimal-pad" placeholderTextColor="white" placeholder="Gerar uma Senha" maxLength={5} onChangeText={Gerar} value={Senha}/>
        <ScrollView>
        <GerarSenha>
          {geraStringAleatoria(Senha)}
          </GerarSenha>
          </ScrollView>
    </SenhaCorpo>
    </SenhaBk>
    )
}
export default GeradorSenha