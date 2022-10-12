import React, { Component } from 'react';
import {View, Text, ImageBackground,StyleSheet} from 'react-native';
import {Hora,CorpoRelo,ImgRelogio} from './Styles/StyleRelogio'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class Relogio extends Component {

  constructor() {
    super();
  }

  componentWillMount() {
    this.getCurrentTime();
  }

  getCurrentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    if (minutes < 10) {minutes = '0' + minutes;}
    if (seconds < 10) {seconds = '0' + seconds;}
    if (hour > 12) {hour = hour - 12;}
    if (hour == 0) {hour = 12;}
    this.setState({ currentTime: hour + ':' + minutes + ':' + seconds});
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }
  render() {
    return (
      <ImgRelogio source={require('../../assets/Arquivos/21.jpg')}>
      <CorpoRelo>
          <Hora style={styles.Hora}>{this.state.currentTime}</Hora>
      </CorpoRelo>
      </ImgRelogio>
    );
  }
}
const styles = StyleSheet.create({
  Hora:{
    fontSize:wp("20%")
  }
})