import React, { Component } from 'react'
import {View,StyleSheet ,Animated} from 'react-native'
import  {PanGestureHandler} from 'react-native-gesture-handler'

export default class RnGestureHandler extends Component {

 translateX = new Animated.Value(1)
 translateY = new Animated.Value(1)
    handleGesture = Animated.event([{nativeEvent: {translationX: this.translateX,translationY:this.translateY}}], { useNativeDriver: true });
    render() {
        let circleTransformStyle 
        circleTransformStyle = {transform:[{translateY : this.translateY},
                    {translateX : this.translateX}]}
        return (
            <View style={[styles.container]}>
            <PanGestureHandler onGestureEvent={this.handleGesture}>
            <Animated.View style={[styles.circle,circleTransformStyle]} />
            </PanGestureHandler>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-around",
      flexDirection: "column",
    },

    circle: {
        width: 50,
        height: 50,
        display:'flex',
        backgroundColor: "blue",
        borderRadius: 100
      },
    separator: {
      width: "100%",
      height: 1,
      backgroundColor: "#ccc"
    },
})