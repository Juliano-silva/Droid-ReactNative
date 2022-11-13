import React, { Component } from 'react';
import { StyleSheet,View,Button,TouchableOpacity,Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
export default class Gradient extends Component {
  constructor(){
    super();
    this.state={
      ColorHolder : 'Clique Aqui'
    }
  }

ChangeColorFunction=()=>
{

var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
var ColorCode1 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
var ColorCode2 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
this.setState({
  ColorHolder : ColorCode,
  ColorHolder1 : ColorCode1,
  ColorHolder2 : ColorCode2
})
}
  render() {
    return (
      <View style={[styles.MainContainer, { backgroundColor: this.state.ColorHolder }]} >
        <LinearGradient colors={
            [this.state.ColorHolder,this.state.ColorHolder1,this.state.ColorHolder2]}>
        <TouchableOpacity onPress={this.ChangeColorFunction}
         style={styles.circle}>
            <Text style={styles.Cores}>{this.state.ColorHolder}</Text>
            </TouchableOpacity>
            </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create(
{
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Cores:{
    fontSize:wp("10%"),
  }

});
