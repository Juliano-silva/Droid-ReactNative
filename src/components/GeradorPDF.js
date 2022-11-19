
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput,ImageBackground } from 'react-native';
import { useState } from 'react';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import {ViewPDF,PDFInput,TextPDF,PDFText} from './Styles/StyleGeradorPDF'
export default function GeradorPDF() {
  let [name, setName] = useState("");

  const html = `
    <html>
      <body>
        <h1>Oi ${name}</h1>
        <p style="color: red;">Tudo bem ? </p>
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
    <ImageBackground source={require("../../assets/Arquivos/19.jpg")} style={{height:"100%"}}>
    <ViewPDF style={{marginTop:100}}>
      <PDFText>Gerador de PDF</PDFText>
      <PDFInput value={name} placeholder="Name" onChangeText={(value) => setName(value)} />
      <TextPDF onPress={generatePdf}>Gerar PDF</TextPDF>
    </ViewPDF>
    </ImageBackground>
  );
}
