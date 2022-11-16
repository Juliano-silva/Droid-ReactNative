import React from 'react';
import { Platform, Text, ScrollView,ImageBackground,Button, View } from 'react-native';
import {ConfigBk,ConfigTexto,ConfigView} from './Styles/StyleConfig'
import * as Battery from 'expo-battery';
import { useEffect,useState } from 'react';
const App = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  const [batteryInfo, setBatteryInfo] = useState(undefined);
  useEffect(() => {
    async function checkAvailability() {
      const isBatteryAvailable = await Battery.isAvailableAsync();
      setIsAvailable(isBatteryAvailable);
    }
    checkAvailability();
  }, []);
  const showBatteryInfo = () => {
    console.log(batteryInfo);
    return (
      <View>
        <Text>Low Power Mode: {batteryInfo.lowPowerMode ? "Yes" : "No"}</Text>
        <Text>Battery Level: {batteryInfo.batteryLevel * 100}%</Text>
        <Text>Battery State: {batteryInfo.batteryState}</Text>
      </View>
    );
  };

  const loadBatteryInfo = async () => {
    let batteryInfoLoaded = await Battery.getPowerStateAsync();
    setBatteryInfo(batteryInfoLoaded);
  };

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
      <ConfigTexto>Bateria</ConfigTexto>
      <View>
      <ConfigTexto>{isAvailable ? "Battery Details: " : "Battery info unavailable"}
      {batteryInfo ? showBatteryInfo() : <Text>Battery info not loaded</Text>}
      {isAvailable && <Button title="Load Battery Info" onPress={loadBatteryInfo} />}</ConfigTexto>
      </View>
      </ConfigView>
      </ScrollView>
      </ConfigBk>
  );
};

export default App;
