import React from 'react';
import {Text,TextInput,TouchableOpacity,View,ImageBackground} from 'react-native';
import {ViewImc,InputIMC,CalularBtn,Resu,TextoCalcular,ResuTexto} from './Styles/StyleImc'
export default class Imc extends React.Component {
  constructor(props){
    super(props)
    this.state = {altura:0,massa:0,resultado:0,resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }
  calcular(){
   let imc = this.state.massa / (this.state.altura * this.state.altura)
   let s = this.state
   s.resultado = imc
   if(s.resultado < 16){
     s.resultadoText ='Muito abaixo do peso'
   }
    else if (s.resultado < 17){
     s.resultadoText ='Moderadamente abaixo do peso'
    }
    else if (s.resultado < 18.5){
     s.resultadoText ='Abaixo do peso'
    }
    else if (s.resultado < 25) {
     s.resultadoText ='Saudavel'
    }
    else if (s.resultado < 30) {
     s.resultadoText ='Sobrepeso'
    }
    else if (s.resultado < 35) {
     s.resultadoText ='Obesidade Grau 1°'
    }
    else if (s.resultado < 40) {
      s.resultadoText ='Obesidade Grau 2°'
    }
    else{
      s.resultadoText ='Obesidade Grau 3°'
    }
   this.setState(s)



  }

  render() {
    return (
      <ImageBackground source={require("../../assets/Arquivos/28.jpg")} style={{height:"100%"}}>
      <ViewImc>
        <TextoCalcular>Calcular o IMC</TextoCalcular>
        <View>
          <InputIMC autoCapitalize="none" placeholder="Altura" keyboardType="numeric" onChangeText={(altura)=>{this.setState({altura})}}/>
          <InputIMC autoCapitalize="none" placeholder="Massa"  keyboardType="numeric" onChangeText={(massa)=>{this.setState({massa})}}/>
        </View>
        <View>
        <TouchableOpacity onPress={this.calcular}><CalularBtn>Calcular</CalularBtn></TouchableOpacity>
        <Resu>{this.state.resultado.toFixed(2)}</Resu>
        <ResuTexto>{this.state.resultadoText}</ResuTexto>
        </View>
    </ViewImc>
    </ImageBackground>
    );
  }
}

