import * as React from 'react'
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native'
import ImageApi from '../components/ImageApi'
import QCode from '../components/QRCode'
import Calendário from '../components/Calendário'
import Câmera from '../components/Câmera'
import Cores from '../components/Cores'
import Moeda from '../components/Moeda'
import Gravador from '../components/Gravador'
import Relogio from '../components/Relogio'
import Web from '../components/Web'
import ContadorTime from '../components/ContadorTime'
import BlocoNotas from '../components/BlocoNotas'
import Portfolio from '../components/Portfolio'
const Drawer = createDrawerNavigator();
import Icon from 'react-native-vector-icons/FontAwesome'
export default function Sidebar(){
  return(
      <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        drawerStyle:{
          backgroundColor:"rgb(92, 36, 92)",
        }
      }}>
      <Drawer.Screen  name='Bloco de Notas' options={{
        drawerIcon:({focused,color,size}) => (
          <Icon name='sticky-note-o' size={25} color={color}/>
        ),
        headerTransparent: true,
        headerTitleStyle:{
          color:'transparent',
          fontSize:50,
        }
      }} component={BlocoNotas}/>
        <Drawer.Screen name='Api de Imagem' options={{
        drawerIcon:({focused,color,size}) => (
          <Icon name='image' size={25} color={color}/>
        ),
        headerTransparent: true,
        headerTitleStyle:{
          color:'transparent',
          fontSize:50,
        }}} component={ImageApi}/>
        <Drawer.Screen name='QRCode' options={{
        drawerIcon:({focused,color,size}) => (
          <Icon name='qrcode' size={25} color={color}/>
        ),          headerTransparent: true,
        headerTitleStyle:{
          color:'transparent',
          fontSize:50,
        }
      }} component={QCode}/>
        <Drawer.Screen name='Calendário' options={{
          drawerIcon:({focused,color,size}) => (
            <Icon name='calendar' size={25} color={color}/>
          ),
          headerTransparent: true,
          headerTitleStyle:{
            color:'transparent',
            fontSize:50,
          }}} component={Calendário}/>
        <Drawer.Screen name='Câmera' options={{
          drawerIcon:({focused,color,size}) => (
            <Icon name='camera-retro' size={25} color={color}/>
          ),           headerTransparent: true,
          headerTitleStyle:{
            color:'transparent',
            fontSize:50,
          }}} component={Câmera}/>
        <Drawer.Screen name='Gerador de cores' options={{
          drawerIcon:({focused,color,size}) => (
            <Icon name='random' size={25} color={color}/>
          ),           headerTransparent: true,
          headerTitleStyle:{
            color:'transparent',
            fontSize:50,
          }}} component={Cores}/>
        <Drawer.Screen name='Gravador' options={{
          drawerIcon:({focused,color,size}) => (
            <Icon name='microphone' size={25} color={color}/>
          ),           headerTransparent: true,
          headerTitleStyle:{
            color:'transparent',
            fontSize:50,
          }}} component={Gravador}/>
        <Drawer.Screen name='Moeda' options={{
          drawerIcon:({focused,color,size}) => (
            <Icon name='money' size={25} color={color}/>
          ),           headerTransparent: true,
          headerTitleStyle:{
            color:'transparent',
            fontSize:50,
          }}} component={Moeda}/>
        <Drawer.Screen name='Relógio' options={{
          drawerIcon:({focused,color,size}) => (
            <Icon name='clock-o' size={25} color={color}/>
          ),           headerTransparent: true,
          headerTitleStyle:{
            color:'transparent',
            fontSize:50,
          }}} component={Relogio}/>
        <Drawer.Screen name='Contador e Timer' options={{
          drawerIcon:({focused,color,size}) => (
            <Icon name='plus' size={25} color={color}/>
          ),           headerTransparent: true,
          headerTitleStyle:{
            color:'transparent',
            fontSize:50,
          }}} component={ContadorTime}/>
        <Drawer.Screen name='Página Web' options={{
          drawerIcon:({focused,color,size}) => (
            <Icon name='hacker-news' size={25} color={color}/>
          ),           headerTransparent: true,
          headerTitleStyle:{
            color:'transparent',
            fontSize:50,
          }}} component={Web}/>
        <Drawer.Screen name='Portfolio' options={{
          drawerIcon:({focused,color,size}) => (
            <Icon name='ship' size={25} color={color}/>
          ),           headerTransparent: true,
          headerTitleStyle:{
            color:'transparent',
            fontSize:50,
          }}} component={Portfolio}/>
      </Drawer.Navigator>
      </NavigationContainer>
  )
}