import React,{useState} from "react"
import { View,Text,Image,ImageBackground,ScrollView } from "react-native"
import AppIntroSlider from 'react-native-app-intro-slider'
import {TextCarrossel,TextCarrosselmenor} from './Styles/StyleCarrossel'
const slides = [
    {
        key:'1',
        title:"Primeira Image",
        text:"Aprenda a desenvolver no PC da xuxa",
        image: require('../../assets/Arquivos/Carrossel1.jpg')
    },
    {
        key:'2',
        title:"Segunda Image",
        text:"Aprenda a diferença entre Batata frita e Batata normal",
        image: require('../../assets/Arquivos/Carrossel2.jpg')
    },
    {
        key:'3',
        title:"Terceira Image",
        text:"Aprenda a Remover o fundo",
        image: require('../../assets/Arquivos/Carrossel3.jpg')
    },
    {
        key:'4',
        title:"Quarta Image",
        text:"Aprenda a flutuar por 5 minutos e isso realmente funciona",
        image: require('../../assets/Arquivos/Carrossel4.jpg')
    },
    {
        key:'5',
        title:"Quinta Image",
        text:"Aprenda por que o Twitter é a melhor e a pior rede social ",
        image: require('../../assets/Arquivos/Carrossel5.jpg')
    }
]
export default function Carrossel(){
    const [showHome,setShowHome] = useState(false)
    function renderSlider({item}){
        return(
            <ImageBackground source={require("../../assets/Arquivos/25.jpg")} style={{height:"100%"}}>
            <View>
                <Image source={item.image} style={{resizeMode:'cover',height:'85%',width:"100%"}}/>
                <ScrollView>
                <TextCarrossel>{item.title}</TextCarrossel>
                <TextCarrosselmenor>{item.text}</TextCarrosselmenor>
                </ScrollView>
            </View>
            </ImageBackground>
        )
    }
    if(showHome){
        return <Text>ENTROU NA MATRIX</Text>
    } else{
        return(
            <AppIntroSlider renderItem={renderSlider} data={slides} activeDotStyle={{
                width:30
            }}/>
        )
    }
}
