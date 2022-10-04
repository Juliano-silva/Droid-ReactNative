import React from "react";
import { View,Text,ImageBackground,Image } from "react-native";
import {CorpoPort,PortCorpo,Nome,Textao,Icones,Empresa,Img} from './Styles/StylePortfolio'
import Icon from 'react-native-vector-icons/FontAwesome'
export default function Portfolio(){
    return(
        <PortCorpo source={require("../../assets/Arquivos/17.jpg")}>
        <CorpoPort>
            <Img source={require('../../assets/Arquivos/Juliano.jpg')}/>
            <Nome>JULIANO SILVA DE ALMEIDA</Nome>
            <Textao>Sobre Mim: Estudante de tecnologia com foco em desenvolvimento de software, busco me inserir no mercado e desenvolver as habilidades necessárias pra me tornar cada vez melhor no que me for proposto a fazer. 

Atualmente tenho conhecimento e experiência nos projetos pessoais que desenvolvi usando boas práticas de HTML, CSS e Javascript, além disso tenho conhecimento em frameworks como React.JS e Vue.JS.</Textao>
            <Empresa>Empresa: JSA Production</Empresa>
            <Icones><Icon name='instagram' size={20}/> ju.liano1841</Icones>
            <Icones><Icon name='steam' size={20}/>  King</Icones>
            <Icones><Icon name='twitter-square' size={20}/> Therion K</Icones>
            <Icones><Icon name='github' size={20}/> Juliano Almeida</Icones>
            <Icones><Icon name='linkedin' size={20}/> Juliano Silva de Almeida</Icones>
        </CorpoPort>
        </PortCorpo>
    )
}