import React, { Component } from 'react';
import { StyleSheet,View,Button,TouchableOpacity,Text,ImageBackground } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {CircleTouch,ViewGradient} from './Styles/StyleGradient'
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
      <ImageBackground source={require("../../assets/Arquivos/27.jpg")} style={{height: "100%",width:"100%"}}>
      <ViewGradient style={styles.MainContainer} >
        <LinearGradient  style={styles.circle} colors={
            [this.state.ColorHolder,this.state.ColorHolder1,this.state.ColorHolder2]}>
        <CircleTouch onPress={this.ChangeColorFunction}>
            </CircleTouch>
            </LinearGradient>
      </ViewGradient>
      </ImageBackground>
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
  circle:{
    borderRadius: wp("50%")
  }
});
