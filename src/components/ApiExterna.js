import React,{useEffect,useState} from "react";
import { SafeAreaView,FlatList,View,Text,Image,ImageBackground } from "react-native";
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
        <SafeAreaView>
            <FlatList
            data={pokemons}
            keyExtractor={(pokemon) => pokemon.name}
            contentContainerStyle={{ flexGrow:1 }}
            renderItem={PokemonShow}/>
        </SafeAreaView>
    )
}
function PokemonShow(item){
    const {name,url} = item.item
    const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','')
    const ImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pokemonNumber+'.png'
    return(
        <ImageBackground source={require('../../assets/Arquivos/3.jpg')}>
        <View>
            <Image style={{width:50,height:50}} source={{uri:ImageUrl}}/>
            <Text>{name}</Text>
        </View>
        </ImageBackground>
    )
}