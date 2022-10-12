import React,{useEffect,useState} from "react";
import { SafeAreaView,FlatList,View,Text,Image,ImageBackground,ScrollView } from "react-native";
import {PokeBody,PokeImg,PokeText,PokeBk} from './Styles/StyleApiExte'
export default function ApiExterna(){
    const [pokemons,setPokemons] = useState([])
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',{
            method:"GET",
            headers:{
                "Accept":"application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setPokemons(data.results)
        })
    },[])
    return(
        <PokeBk source={require("../../assets/Arquivos/3.jpg")}>
            <FlatList
            data={pokemons}
            keyExtractor={(pokemon) => pokemon.name}
            renderItem={PokemonShow}/>
        </PokeBk>
    )
}
function PokemonShow(item){
    const {name,url} = item.item
    const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','')
    const ImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pokemonNumber+'.png'
    return(
        <PokeBody>
            <PokeImg style={{width:200,height:200}} source={{uri:ImageUrl}}/>
            <PokeText>{name}</PokeText>
        </PokeBody>
    )
}