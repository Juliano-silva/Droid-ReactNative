import React, { Component } from 'react';
import { StyleSheet,View,Button,TouchableOpacity,Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Cores} from './Styles/StyleCores'
export default class Color extends Component {
  constructor(){
    super();
    this.state={
      ColorHolder : 'Clique Aqui'
    }
  }
 
ChangeColorFunction=()=>
{
 
var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
this.setState({
  ColorHolder : ColorCode
})
}
  render() {
    return (
      <View style={[styles.MainContainer, { backgroundColor: this.state.ColorHolder }]} >
        <TouchableOpacity onPress={this.ChangeColorFunction}><Cores style={styles.Cores}>{this.state.ColorHolder}</Cores></TouchableOpacity>
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
    fontSize:wp("10%")
  }
 
});