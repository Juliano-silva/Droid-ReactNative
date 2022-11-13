import React,{useState} from "react"
import { View,Text,Image } from "react-native"
import AppIntroSlider from 'react-native-app-intro-slider'
const slides = [
    {
        key:'1',
        title:"Primeira Image",
        text:"Aprenda a desenvolver",
        image: require('../../assets/Arquivos/2.jpg')
    },
    {
        key:'2',
        title:"Segunda Image",
        text:"Aprenda a desenvolver o Computador",
        image: require('../../assets/Arquivos/5.jpg')
    },
    {
        key:'3',
        title:"Primeira Image",
        text:"Aprenda a desenvolver no PC da xuxa",
        image: require('../../assets/Arquivos/8.jpg')
    }
]
export default function Carrossel(){
    const [showHome,setShowHome] = useState(false)
    function renderSlider({item}){
        return(
            <View>
                <Image source={item.image} style={{resizeMode:'cover',height:'73%',width:"100%"}}/>
                <Text>{item.title}</Text>
                <Text>{item.text}</Text>
            </View>
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
