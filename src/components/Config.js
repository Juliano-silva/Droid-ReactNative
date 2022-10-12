import React from 'react';
import { Platform, Text, ScrollView,ImageBackground } from 'react-native';
import {ConfigBk,ConfigTexto,ConfigView} from './Styles/StyleConfig'
const App = () => {
  return (
      <ConfigBk source={require('../../assets/Arquivos/4.jpg')}>
        <ScrollView>
        <ConfigView>
      <ConfigTexto>Sistema Operacional</ConfigTexto>
      <ConfigTexto>{Platform.OS}</ConfigTexto>
      <ConfigTexto>Sistema Operacional Versão</ConfigTexto>
      <ConfigTexto>{Platform.Version}</ConfigTexto>
      <ConfigTexto>isTV</ConfigTexto>
      <ConfigTexto>{Platform.isTV.toString()}</ConfigTexto>
      {Platform.OS === 'ios' && (
        <>
          <ConfigTexto>isPad</ConfigTexto>
          <ConfigTexto>{Platform.isPad.toString()}</ConfigTexto>
        </>
      )}
      <ConfigTexto>Constantes</ConfigTexto>
      <ConfigTexto>{JSON.stringify(Platform.constants, null, 2)}</ConfigTexto>
      </ConfigView>
      </ScrollView>
      </ConfigBk>
  );
};

export default App;