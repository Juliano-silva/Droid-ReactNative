import React, { Component } from "react";
import { StyleSheet, View,ImageBackground, Text, PanResponder, Animated,  } from "react-native";
import {BichBk,Row,CorpoVirtu,Nome,Corpo} from './Styles/StyleBichVirtu'
import { LinearGradient } from 'expo-linear-gradient';
class Draggable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
    };
  }

  componentWillMount() {
    this._val = { x:0, y:0 }
    this.state.pan.addListener((value) => this._val = value);

    this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderGrant: (e, gesture) => {
          this.state.pan.setOffset({
            x: this._val.x,
            y:this._val.y
          })
          this.state.pan.setValue({ x:0, y:0})
        },
        onPanResponderMove: Animated.event([
          null, { dx: this.state.pan.x, dy: this.state.pan.y }
        ]),

      });
  }


  render() {
    return (
      <View >
        {this.renderDraggable()}
      </View>
    );
  }

  renderDraggable() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    if (this.state.showDraggable) {
      return (
        <Corpo style={{ position: "absolute" }}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[panStyle]}
          >
        <LinearGradient colors={['#4158D0','#C850C0','#FFCC70']}
        style={styles.circle}>
          
        </LinearGradient>
          </Animated.View>
        </Corpo>
      );
    }
  }
}


export default class App extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <BichBk source={require("../../assets/Arquivos/22.jpg")}>
        <View/>
        <CorpoVirtu>
          <Draggable />
          <Draggable />
          <Draggable />
          <Draggable />
          <Draggable />
          <Draggable />
          <Draggable />
          <Draggable />
          <Draggable />
          <Draggable />
          <Draggable />
          <Draggable />
          <Draggable />
          <Draggable />
        </CorpoVirtu>
        </BichBk>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  ballContainer: {
    height:450
  },
  circle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:350,
    height:500,
    borderRadius:20,
    marginTop: -200,
    margin:"auto",
    marginLeft: -133,
  },
});
