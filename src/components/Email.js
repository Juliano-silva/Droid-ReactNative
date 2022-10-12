import React from 'react'
import { StyleSheet, Button, View,ImageBackground } from 'react-native'
import email from 'react-native-email'

export default class App extends React.Component {
    render() {
        return (
            <ImageBackground  source={require('../../assets/Arquivos/1.jpg')}>
            <View style={styles.container}>
                <Button title="Send Mail" onPress={this.handleEmail} />
            </View>
            </ImageBackground>
        )
    }

    handleEmail = () => {
        const to = ['tiaan@email.com', 'foo@bar.com']
        email(to, {
            cc: ['bazzy@moo.com', 'doooo@daaa.com'], 
            bcc: 'mee@mee.com', 
            subject: 'Show how to use',
            body: 'Some body right here',
            checkCanOpen: false
        }).catch(console.error)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'red',
        marginTop:800,
        alignItems: 'center',
        justifyContent: 'center'
    }
})