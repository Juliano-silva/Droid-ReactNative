
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

export default function GeradorPDF() {
  let [name, setName] = useState("");

  const html = `
    <html>
      <body>
        <h1>Hi ${name}</h1>
        <p style="color: red;">Hello. Bonjour. Hola.</p>
      </body>
    </html>
  `;

  let generatePdf = async () => {
    const file = await printToFileAsync({
      html: html,
      base64: false
    });

    await shareAsync(file.uri);
  };

  return (
    <View style={{marginTop:100}}>
      <TextInput value={name} placeholder="Name" onChangeText={(value) => setName(value)} />
      <Button title="Generate PDF" onPress={generatePdf} />
      <StatusBar />
    </View>
  );
}
