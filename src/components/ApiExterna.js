import React,{useEffect,useState} from "react";
import { SafeAreaView,FlatList,View,Text,Image,ImageBackground,TextInput,ScrollView } from "react-native";
import {PokeBody,PokeImg,PokeText,PokeBk,PokePesquisa} from './Styles/StyleApiExte'
export default function ApiExterna(){
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [pokemons,setPokemons] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
          .then((response) => response.json())
          .then((responseJson) => {
            setFilteredData(responseJson);
            setMasterData(responseJson);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

      const searchFilter = (text) => {
        if (text) {
          const newData = masterData.filter(
            function (item) {
              if (item.title) {
                const itemData = item.title.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
              }
          });
          setFilteredData(newData);
          setSearch(text);
        } else {
          setFilteredData(masterData);
          setSearch(text);
        }
      };

      const ItemView = ({item}) => {
        return (
          <Text
            onPress={() => getItem(item)}>
            {item.id}
            {item.title.toUpperCase()}
          </Text>
        );
      };

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
                  <View>
        <PokePesquisa
          onChangeText={(text) => searchFilter(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Procure Aqui"
        />
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={ItemView}
        />
      </View>
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
            <PokeText >{name}</PokeText>
        </PokeBody>
    )
}
