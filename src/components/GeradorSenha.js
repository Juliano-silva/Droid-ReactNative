import React,{useState} from "react";
import { View,Text,TouchableOpacity,TextInput,Button } from "react-native";
import Clipboard from "@react-native-community/clipboard";
function geraStringAleatoria(tamanho) {
    var stringAleatoria = ''; // Primeira palavra
    var caracteres = 'ABCDEFGHIJKL0123456789'; // Cores
    for (var i = 0; i < tamanho; i++) {
       stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
}
const GeradorSenha = () => {
    const [Senha,Gerar] = React.useState(12)
    const [typedText, setTypedText] = useState('');
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = () => {
    Clipboard.setString(typedText);
    alert("Texto Copiado!");
  }

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  }

    return(
    <View>
            <Text>Gerar Senha</Text>
            <TextInput placeholder="Gerar uma Senha" maxLength={3} onChangeText={Gerar} value={Senha}/>
            <View>
        <TextInput
          placeholder="Digite Algum Texto Aqui..."
          onChangeText={typedText => setTypedText(typedText)}
          defaultValue={typedText}/>
        <Button
          onPress={copyToClipboard}
          title="Copiar Texto"
        />
        <Text>{copiedText}</Text>
        <Button
          onPress={fetchCopiedText}
          title="Ver Texto Copiado"
        />
      </View>
        <Text>{geraStringAleatoria(Senha)}</Text>
    </View>
    )
}
export default GeradorSenha