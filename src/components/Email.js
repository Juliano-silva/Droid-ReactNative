import React,{useState,useEffect} from 'react'
import { StyleSheet, Buttone, View,ImageBackground,TextInput,Text } from 'react-native'
import email from 'react-native-email'
import {ButtoEmail,EmailBk,CorpoEmail,InputEmail} from './Styles/StyleEmail'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {to: ''};
        this.state = {para: ''};
        this.state = {text: ''};
        this.state = {textao: ''};
      }
    render() {
        return (
            <EmailBk source={require('../../assets/Arquivos/1.jpg')}>
            <CorpoEmail>
                <InputEmail placeholder='Digite o to' onChangeText={(to) => this.setState({to})} value={this.state.to}/>
                <InputEmail placeholder='Digite Para quem você quer enviar' onChangeText={(para) => this.setState({para})} value={this.state.para}/>
                <InputEmail placeholder='Texto Principal' onChangeText={(text) => this.setState({text})} value={this.state.text}/>
                <InputEmail placeholder='Texto' onChangeText={(textao) => this.setState({textao})} value={this.state.textao}/>
                <ButtoEmail onPress={this.handleEmail}>
                    Gmail
                </ButtoEmail>
            </CorpoEmail>
            </EmailBk>
        )
    }

    handleEmail = () => {
        // Eu
        const to = [this.state.to]
        email(to, {
            // Para
            cc: [this.state.para], 
            // Principal Texto
            subject: this.state.text,
            // Texto
            body: this.state.textao,
            checkCanOpen: false
        }).catch(console.error)
    }
}

const styles = StyleSheet.create({

})