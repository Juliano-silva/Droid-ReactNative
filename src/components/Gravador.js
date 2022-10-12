import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text} from 'react-native';
import {ImgGrava,Play,Start,Compartilhar,Gravação,CorpoGrava,Gravações} from './Styles/StyleGravador'
import { Audio } from 'expo-av';
import * as Sharing from 'expo-sharing';
import { ScrollView } from 'react-native-gesture-handler';
export default function App() {
  const [recording, setRecording] = React.useState();
  const [recordings, setRecordings] = React.useState([]);
  const [message, setMessage] = React.useState("");

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        });
        
        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI()
    });

    setRecordings(updatedRecordings);
  }

  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <Gravações key={index}>
          <Gravação >Diario de bordo {index + 1}  {recordingLine.duration}</Gravação>
          <Play onPress={() => recordingLine.sound.replayAsync()}>Iniciar</Play>
          <Compartilhar onPress={() => Sharing.shareAsync(recordingLine.file)}>Compartilhar</Compartilhar>
        </Gravações>
      );
    });
  }

  return (
    <ImgGrava source={require('../../assets/Arquivos/19.jpg')}>
    <ScrollView>
    <CorpoGrava>
      <Text>{message}</Text>
      <Start onPress={recording ? stopRecording : startRecording}>{recording ? 'Parar a Gravação' : 'Começar a gravação'}</Start>
      {getRecordingLines()}
      <StatusBar />
    </CorpoGrava>
    </ScrollView>
    </ImgGrava>
  );
}