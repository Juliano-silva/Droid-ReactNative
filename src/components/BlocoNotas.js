import React, { useState, useEffect } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {Keyboard,StyleSheet,Alert,KeyboardAvoidingView,Platform,ScrollView} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text,View,TouchableOpacity,FlatList} from "react-native";
import {BlocoBK,BlocoInput,Adicionar,ItemAPi,CorpoApi,ButtonApi,ViewApi,CorpoNotas} from './Styles/StylesApi'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function BlocoNotas() {
  const [task2, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  async function addTask() {
    setTask([...task2, newTask]);
    setNewTask("");
    Keyboard.dismiss();
  }
  async function removeTask(item) {
    Alert.alert(
      "Deletar a Nota",
      `${item}`,
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
          onPress: () => setTask(task2.filter(tasks => tasks !== item))
        }
      ],
      { cancelable: false }
    );
  }
  useEffect(() => {
    async function carregaDados() {
      const task2 = await AsyncStorage.getItem("task2");
      if (task2) {
        setTask(JSON.parse(task2));
      }
    }
    carregaDados();
  }, []);
  useEffect(() => {
    async function salvaDados() {
      AsyncStorage.setItem("task2", JSON.stringify(task2));
    }
    salvaDados();
  }, [task2]);
  return (
    <>
      <KeyboardAvoidingView
        keyboardVerticalOffset={0}
        behavior="padding"
        enabled={Platform.OS === "ios"}
      >
      <ScrollView>
        <View >
        <BlocoBK source={require("../../assets/Arquivos/15.jpg")}>
          <CorpoNotas style={styles.CorpoNotas}>
            <FlatList
              data={task2}
              keyExtractor={item => item.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <ViewApi>
                  <ScrollView>
                  <CorpoApi><ItemAPi >{item}
                  <ButtonApi onPress={() => removeTask(item)}>
                    <MaterialIcons
                      name="delete-forever"
                      size={40}
                      color="greenyellow"
                    />
                  </ButtonApi>
                  </ItemAPi></CorpoApi>
                  </ScrollView>
                </ViewApi>
              )}
            />
          </CorpoNotas>
          <View>
            <BlocoInput style={styles.Inputs} placeholderTextColor="#fff" autoCorrect={true} value={newTask} placeholder="Adicione uma Nota" onChangeText={text => setNewTask(text)}/>
            <TouchableOpacity onPress={() => addTask()}>
            <Adicionar>
              <Ionicons name="ios-add" size={40} color="white" />
              </Adicionar>
            </TouchableOpacity>
          </View>
          </BlocoBK>
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
const styles = StyleSheet.create({
  Inputs:{
    marginTop: wp("2%")
  },
  CorpoNotas:{
    height: wp("160%")
  }
})