import React, { useCallback,useState, useEffect } from 'react';
import {ImageBackground, StyleSheet,Text,TextInput, TouchableOpacity,View} from 'react-native';
import {ContTimeBack,ContadorSeg,Start,Reset,InputTime,TimeText,CorpoTime} from './Styles/StyleContTime'
import axios from 'axios';
const formatNumber = number => `0${number}`.slice(-2);
const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
}

export default function ContadorTime() {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { mins, secs } = getRemaining(remainingSecs);
  const api = {
    key:'30669d8ba178ebe36e484e370edaccce',
    baseUrl: 'http://api.openweathermap.org/data/2.5/',
  };
  toggle = () => {
    setIsActive(!isActive);
  }

  reset = () => {
    setRemainingSecs(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setRemainingSecs(remainingSecs => remainingSecs + 1);
      }, 1000);
    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);

  const fetchDataHandler = useCallback(() => {
    setInput('');
    axios({
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api.key}`,
    })
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.dir(err);
      })
      .finally(() => {
      });
  }, [input, api.key]);
  return (
    <ContTimeBack source={require('../../assets/Arquivos/10.jpg')}>
    <View>
    <View>
      <ContadorSeg>{`${mins}:${secs}`}</ContadorSeg>
      <TouchableOpacity onPress={toggle}>
          <Start>{isActive ? 'Pause' : 'Start'}</Start>
      </TouchableOpacity>
      <TouchableOpacity onPress={reset}>
          <Reset>Reset</Reset>
      </TouchableOpacity>
        <View>
          <InputTime
            placeholder="Escreva o nome de uma Cidade"
            onChangeText={text => setInput(text)}
            placeholderTextColor={'#fff'}
            onSubmitEditing={fetchDataHandler}
            value={input}/>
        </View>
        {data && (
          <CorpoTime>
            <TimeText>{`${data?.name}, ${data?.sys?.country}`}</TimeText>
            <TimeText>Dia {new Date().getDate()}</TimeText>
            <TimeText>{`${Math.round(data?.main?.temp,)} °C`}</TimeText>
            <TimeText>{`Min ${Math.round(data?.main?.temp_min,)} °C / Max ${Math.round(data?.main?.temp_max)} °C`}</TimeText>
          </CorpoTime>
        )}
    </View>
    </View>
    </ContTimeBack>
  );
}