import React, { useState, useEffect } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text,StyleSheet,Image,View,TextInput,TouchableOpacity,FlatList,ScrollView,Keyboard,Alert,KeyboardAvoidingView,Platform,ImageBackground} from "react-native";
import {ImageApiBackground,Img,IconeImg,InputImg,Apagar,Remover} from './Styles/StyleImageApi'
export default function ImageApi() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  async function addTask() {
    const search = task.filter(task => task === newTask);
    if (search.length !== 0) {
      Alert.alert("Atenção", "Nome da tarefa repetido!");
      return;
    }
    setTask([...task, newTask]);
    setNewTask("");
    Keyboard.dismiss();
  }
  async function removeTask(item) {
    Alert.alert(
      "Deletar essa Imagem",
      `Você quer apagar esse link ${item}`,
      [
        {
          text: "Não",
          onPress: () => {
            return;
          },
          style: "Não"
        },
        {
          text: "Sim",
          onPress: () => setTask(task.filter(tasks => tasks !== item))
        }
      ],
      { cancelable: false }
    );
  }
  useEffect(() => {
    async function carregaDados() {
      const task = await AsyncStorage.getItem("task");
      if (task) {
        setTask(JSON.parse(task));
      }
    }
    carregaDados();
  }, []);
  useEffect(() => {
    async function salvaDados() {
      AsyncStorage.setItem("task", JSON.stringify(task));
    }
    salvaDados();
  }, [task]);
  return (
    <>
      <KeyboardAvoidingView keyboardVerticalOffset={0} behavior="padding" enabled={Platform.OS === "ios"}>
        <View>
          <ImageApiBackground source={require("../../assets/Arquivos/14.jpg")}>
          <ScrollView>
          <View >
            <FlatList
              data={task}
              keyExtractor={item => item.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View>
                <Img source={{uri: `${item}`}}/>
                  <TouchableOpacity onPress={() => removeTask(item)}>
                  <Remover>Remover</Remover>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
          <View>
            <InputImg
              placeholderTextColor="#fff"
              autoCorrect={true}
              value={newTask}
              placeholder="Adicione uma Image"
              onChangeText={text => setNewTask(text)}
            />
            <IconeImg onPress={() => addTask()}>
              <Ionicons name="ios-add" size={50} color="white" />
            </IconeImg>
          </View>
          </ScrollView>
          </ImageApiBackground>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}