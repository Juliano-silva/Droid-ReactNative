import * as React from 'react';
import { Text, View, StyleSheet, Button,ImageBackground,ScrollView } from 'react-native';
import { Audio } from 'expo-av';
import {ButtonMeme,TextAudio} from './Styles/StyleAudioMeme'
export default function App() {
  const [sound, setSound] = React.useState();
  async function playSound() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Bosta.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound1() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/CalmaPai.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound2() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/CavaloVinheta.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound3() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Cavalo.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound4() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Cego.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound5() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Continua.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound6() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Core.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound7() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Disco.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound8() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Elegosta.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound9() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/FilhadaPuta.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound10() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Filho.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound11() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/fogos.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound12() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Gatinho.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound13() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Gemid??o.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound14() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/gemidaoEstourado.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound15() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Gnome.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound16() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Gozar.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound17() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Grito.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound18() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/GritoTom.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound19() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Haven.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound20() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Hey.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound21() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Hooo.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound22() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Irra.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound23() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/JApones.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound24() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Macaco.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound25() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/MASQUEICOOOOOO.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound26() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Miku.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound27() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/JOJO.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound28() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/mimada.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound29() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Monkey.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound30() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Motorola.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound31() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Olhaele.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound32() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/onceSaid.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound33() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/pai.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound34() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Pare.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound35() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Patr??o.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound36() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Pedra.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound37() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Pigman.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound38() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Policia.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound39() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Pomba.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound40() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/potencia.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound41() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Pum.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound42() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Rapaz.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound43() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Ratinho.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound44() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Receba.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound45() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Risada.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound46() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Roblox.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound47() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/RodrigoFaroUiii.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound48() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Samsung.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound49() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Snake.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound50() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/SuperIdol.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound51() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Tarzan.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound52() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/TOAD.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound53() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/U??pa.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound54() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Uii.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound55() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Vegeta.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound56() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/vineBoom.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound57() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/WhatThehell.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound58() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/xiiii.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound59() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/XJ6.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound60() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Yugi.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound61() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/2horas.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound62() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/3horas.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound63() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Aplausos.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound64() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Bateria.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound65() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Del??cia.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound66() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Explos??oMeme.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound67() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/FlashBack.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound68() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Oooooh.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound69() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/Tempo.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound70() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/TIRO.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound71() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/TomanoteuCuPorra.mp3'));setSound(sound);await sound.playAsync();}
  async function playSound72() {const { sound } = await Audio.Sound.createAsync( require('../../assets/Sound/WellBe.mp3'));setSound(sound);await sound.playAsync();}
  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <ImageBackground source={require("../../assets/Arquivos/31.jpg")} style={{height:"100%"}}>
    <ScrollView>
    <View>
      <TextAudio>Audio Meme</TextAudio>
      <ButtonMeme onPress={playSound}>1.Bosta</ButtonMeme>
      <ButtonMeme onPress={playSound1}>2.CalmaPai</ButtonMeme>
      <ButtonMeme onPress={playSound2}> 3.Cavalo Vinheta</ButtonMeme>
      <ButtonMeme onPress={playSound3}>4.Cavalo Estourado</ButtonMeme>
      <ButtonMeme onPress={playSound4}>5.Cego</ButtonMeme>
      <ButtonMeme onPress={playSound5}>6.Continua</ButtonMeme>
      <ButtonMeme onPress={playSound6}>7.Core</ButtonMeme>
      <ButtonMeme onPress={playSound7}>8.Disco</ButtonMeme>
      <ButtonMeme onPress={playSound8}>9.Ele gosta</ButtonMeme>
      <ButtonMeme onPress={playSound9}>10.Filha da Puta</ButtonMeme>
      <ButtonMeme onPress={playSound10}>11.Calma</ButtonMeme>
      <ButtonMeme onPress={playSound11}>12.fogos de artificio</ButtonMeme>
      <ButtonMeme onPress={playSound12}>13.Dan??a gatinho</ButtonMeme>
      <ButtonMeme onPress={playSound13}>14.Gemid??o</ButtonMeme>
      <ButtonMeme onPress={playSound14}>15.Gemid??o Normal</ButtonMeme>
      <ButtonMeme onPress={playSound15}>16.Gnomo</ButtonMeme>
      <ButtonMeme onPress={playSound16}>17.Eu quero Gozar</ButtonMeme>
      <ButtonMeme onPress={playSound17}>18.Grito</ButtonMeme>
      <ButtonMeme onPress={playSound18}>19.Grito do Tom</ButtonMeme>
      <ButtonMeme onPress={playSound19}>20.M??sica de Anime</ButtonMeme>
      <ButtonMeme onPress={playSound20}>21.HEYYEYAAEYAAAEYAEYAA</ButtonMeme>
      <ButtonMeme onPress={playSound21}>22.Hooo</ButtonMeme>
      <ButtonMeme onPress={playSound22}>23.Irra</ButtonMeme>
      <ButtonMeme onPress={playSound23}>24.Tu acha que eu sei Japones?</ButtonMeme>
      <ButtonMeme onPress={playSound24}>25.Eu vim ver o macaco</ButtonMeme>
      <ButtonMeme onPress={playSound25}>26.MASQUEICOOOOOO</ButtonMeme>
      <ButtonMeme onPress={playSound26}>27.M??sica de Anime 2</ButtonMeme>
      <ButtonMeme onPress={playSound27}>28.Giorno Jojo</ButtonMeme>
      <ButtonMeme onPress={playSound28}>29.Voc?? ?? mimada?</ButtonMeme>
      <ButtonMeme onPress={playSound29}>30.Macaco som</ButtonMeme>
      <ButtonMeme onPress={playSound30}>31.Motorola</ButtonMeme>
      <ButtonMeme onPress={playSound31}>32.Olha ele a??</ButtonMeme>
      <ButtonMeme onPress={playSound32}>33.Gemaplys frases</ButtonMeme>
      <ButtonMeme onPress={playSound33}>34.Ele n??o ?? o PAI</ButtonMeme>
      <ButtonMeme onPress={playSound34}>35.PARE</ButtonMeme>
      <ButtonMeme onPress={playSound35}>36.Esse ?? meu Patr??o</ButtonMeme>
      <ButtonMeme onPress={playSound36}>37.Pedra</ButtonMeme>
      <ButtonMeme  onPress={playSound37}>38.Pigman</ButtonMeme>
      <ButtonMeme onPress={playSound38}>39.Policia</ButtonMeme>
      <ButtonMeme onPress={playSound39}>40.Pomba</ButtonMeme>
      <ButtonMeme  onPress={playSound40}>41.Potencia</ButtonMeme>
      <ButtonMeme onPress={playSound41}>42.Pum</ButtonMeme>
      <ButtonMeme onPress={playSound42}>43.Rapaz</ButtonMeme>
      <ButtonMeme onPress={playSound43}>44.Ratinhoooo</ButtonMeme>
      <ButtonMeme onPress={playSound44}>45.Receba</ButtonMeme>
      <ButtonMeme onPress={playSound45}>46.kkkkkkkkkk</ButtonMeme>
      <ButtonMeme onPress={playSound46}>47.Morte Roblox</ButtonMeme>
      <ButtonMeme onPress={playSound47}>48.Uiiii</ButtonMeme>
      <ButtonMeme onPress={playSound48}>49.Samsung</ButtonMeme>
      <ButtonMeme onPress={playSound49}>50.Snake</ButtonMeme>
      <ButtonMeme onPress={playSound50}>51.Super IDol</ButtonMeme>
      <ButtonMeme onPress={playSound51}>52.Tarzan</ButtonMeme>
      <ButtonMeme onPress={playSound52}>53.Toad</ButtonMeme>
      <ButtonMeme onPress={playSound53}>54.U??pa</ButtonMeme>
      <ButtonMeme onPress={playSound54}>55.Uiiiiiii</ButtonMeme>
      <ButtonMeme onPress={playSound55}>56.Vegeta</ButtonMeme>
      <ButtonMeme onPress={playSound56}>57.Vine Boom</ButtonMeme>
      <ButtonMeme onPress={playSound57}>58.What The Hell</ButtonMeme>
      <ButtonMeme onPress={playSound58}>59.Xiiii</ButtonMeme>
      <ButtonMeme onPress={playSound59}>60.XJ6</ButtonMeme>
      <ButtonMeme onPress={playSound60}>61.Seu Porra</ButtonMeme>
      <ButtonMeme onPress={playSound61}>62.2 horas Depois</ButtonMeme>
      <ButtonMeme onPress={playSound62}>63.3 horas Depois</ButtonMeme>
      <ButtonMeme onPress={playSound63}>64.Aplausos</ButtonMeme>
      <ButtonMeme onPress={playSound64}>65.Bateria</ButtonMeme>
      <ButtonMeme onPress={playSound65}>66.Del??cia</ButtonMeme>
      <ButtonMeme onPress={playSound66}>67.Explos??o Meme</ButtonMeme>
      <ButtonMeme onPress={playSound67}>68.FlashBack</ButtonMeme>
      <ButtonMeme onPress={playSound68}>69.Oooooh</ButtonMeme>
      <ButtonMeme onPress={playSound69}>70.Muito Tempo</ButtonMeme>
      <ButtonMeme onPress={playSound70}>71.Tiro</ButtonMeme>
      <ButtonMeme onPress={playSound71}>72.Toma no teu Cu Porra</ButtonMeme>
      <ButtonMeme onPress={playSound72}>73.We'll be right back</ButtonMeme>
    </View>
    </ScrollView>
    </ImageBackground>
  );
}
