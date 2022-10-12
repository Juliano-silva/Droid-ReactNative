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
        const to = ['tiaan@email.com', 'foo@bar.com'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
            bcc: 'mee@mee.com', // string or array of email addresses
            subject: 'Show how to use',
            body: 'Some body right here',
            checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
        }).catch(console.error)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})