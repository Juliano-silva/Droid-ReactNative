import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableNativeFeedback, StatusBar,ImageBackground } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const App = () => {
  const [rippleColor, setRippleColor] = useState(randomHexColor());
  const [rippleOverflow, setRippleOverflow] = useState(false);
  return (
    <ImageBackground style={styles.Background} source={require("../../assets/Arquivos/23.jpg")}>
    <View>
      <TouchableNativeFeedback
        onPress={() => {
          setRippleColor(randomHexColor());
          setRippleOverflow(!rippleOverflow);
        }}
        background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}
      >
        <View style={styles.touchable}>
        </View>
      </TouchableNativeFeedback>
    </View>
    </ImageBackground>
  );
};
// Random de cores Hexadecimal
const randomHexColor = () => {
  return "#000000".replace(/0/g, function() {
    return (~~(Math.random() * 16)).toString(16);
  });
};

const styles = StyleSheet.create({
  touchable: {
     height: wp("200%")
  },
  Background:{
    height: wp("170%"),
  }
});

export default App;
