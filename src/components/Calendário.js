import React, { useState } from "react";

import { Button, ImageBackground, SafeAreaView, Text, View } from 'react-native';
import {CaleImg,Data,DataTex,InputData,CorpoCale} from './Styles/StyleCalendário'
import DateTimePicker from '@react-native-community/datetimepicker';
export default function App() {
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  function showDatePicker() {
    setDatePicker(true);
  };


  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };


  return (
       <CaleImg source={require('../../assets/Arquivos/8.jpg')}>
      <CorpoCale>
        <Data>Data</Data>
        <DataTex>{date.toDateString()}</DataTex>
        {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected}
          />
        )}


        {!datePicker && (
          <View>
            <InputData onPress={showDatePicker}>Mudar a data</InputData>
          </View>
        )}
      </CorpoCale>
      </CaleImg>
  );
}
