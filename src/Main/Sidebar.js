import * as React from 'react'
import { createDrawerNavigator, DrawerContent, DrawerItem } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView,StyleSheet } from 'react-native'
// Antigas
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
// Novas
import Calculadora from '../components/Calculadora'
import Loja from '../components/Loja'
import Email from '../components/Email'
import Mapa from '../components/Mapa'
import Mural from '../components/Mural'
import Falar from '../components/Falar'
import ApiExterna from '../components/ApiExterna'
import BichVirtu from '../components/BichVirtu'
import Config from '../components/Config'
const Drawer = createDrawerNavigator();
import Icon from 'react-native-vector-icons/FontAwesome'
import GeradorSenha from '../components/GeradorSenha'
// Novos de Novo
import AudioMeme from '../components/AudioMeme'
import Telefonica from '../components/Telefonica'
import Tradutor from '../components/Tradutor'
import WaveButton from '../components/WaveButton'
import GravadorV from '../components/GravadorVídeo'
import GeradorPDF from '../components/GeradorPDF'
import Gradient from '../components/Gradient'
import Carrossel from '../components/Carrossel'
import Imc from '../components/Imc'
export default function Sidebar(){
  return(
      <NavigationContainer>
      <Drawer.Navigator style={Styles.Drawer}
      screenOptions={{
        headerTintColor: "#fff",
        drawerStyle:{
          backgroundColor:"black",
          opacity:0.9
        },
        drawerLabelStyle:{
          color:"rgb(230, 226, 226)",
          fontSize:15,
          fontFamily:'Inter-Black',
        }
        }}>
      <Drawer.Screen name='Bloco de Notas' options={{
        drawerIcon:() => (
          <Icon name='sticky-note-o' size={25} color={"yellow"}/>
        ),
        headerTransparent: true,
        headerTitleStyle:{
          color:'transparent',
        }
      }} component={BlocoNotas}/>
        <Drawer.Screen name='Bloco de Imagem' options={{
        drawerIcon:() => (
          <Icon name='file-picture-o' size={25} color={"yellow"}/>
        ),
        headerTransparent: true,
        headerTitleStyle:{
          color:'transparent',
        }}} component={ImageApi}/>
        <Drawer.Screen name='QRCode' options={{
        drawerIcon:() => (
          <Icon name='qrcode' size={25} color={"yellow"}/>
        ),          headerTransparent: true,
        headerTitleStyle:{
          color:'transparent',
        }
      }} component={QCode}/>
        <Drawer.Screen name='Calendário' options={{
          drawerIcon:() => (
            <Icon name='calendar' size={25} color={"yellow"}/>
          ),
          headerTransparent: true,
          headerTitleStyle:{
            color:'transparent',
          }}} component={Calendário}/>
        <Drawer.Screen name='Câmera' options={{
          drawerIcon:() => (
            <Icon name='camera-retro' size={25} color={"yellow"}/>
          ),           headerTransparent: true,
          headerTitleStyle:{
            color:'transparent',
          }}} component={Câmera}/>
        <Drawer.Screen name='Gerador de cores' options={{
          drawerIcon:() => (
            <Icon name='random' size={25} color={"yellow"}/>
          ),           headerTransparent: true,
          headerTitleStyle:{
            color:'transparent',
          }}} component={Cores}/>
        <Drawer.Screen name='Gravador' options={{
          drawerIcon:() => (
            <Icon name='microphone' size={25} color={"yellow"}/>
          ),           headerTransparent: true,
          headerTitleStyle:{
            color:'transparent',
          }}} component={Gravador}/>
        <Drawer.Screen name='Moeda' options={{
          drawerIcon:() => (
            <Icon name='money' size={25} color={"yellow"}/>
          ),           headerTransparent: true,
          headerTitleStyle:{
            color:'transparent',
          }}} component={Moeda}/>
        <Drawer.Screen name='Relógio' options={{
          drawerIcon:() => (
            <Icon name='clock-o' size={25} color={"yellow"}/>
          ),           headerTransparent: true,
          headerTitleStyle:{
            color:'transparent',
          }}} component={Relogio}/>
        <Drawer.Screen name='Contador/Timer' options={{
          drawerIcon:() => (
            <Icon name='plus' size={25} color={"yellow"}/>
          ),           headerTransparent: true,
          headerTitleStyle:{
            color:'transparent',
          }}} component={ContadorTime}/>
        <Drawer.Screen name='Página Web' options={{
          drawerIcon:() => (
            <Icon name='hacker-news' size={25} color={"yellow"}/>
          ),
          drawerActiveBackgroundColor:'rgb(10, 8, 8)'
          ,
                     headerTransparent: true,
          headerTitleStyle:{
            color:'transparent',
          }}} component={Web}/>
        <Drawer.Screen name='Portfolio' options={{
          drawerIcon:() => (
            <Icon name='github' size={25} color={"yellow"}/>
          ),
          drawerActiveBackgroundColor:'rgb(10, 8, 8)',
          headerTransparent: true,
          headerTitleStyle:{
            color:'transparent',
          }}} component={Portfolio}/>
        <Drawer.Screen name='Calculadora' component={Calculadora} options={{
           drawerIcon:() => (
            <Icon name='calculator' size={25} color={"yellow"}/>
          ),
            headerTransparent: true,
            headerTitleStyle:{
              color:'transparent',
            }
        }}/>
        <Drawer.Screen name='Gmail' component={Email} options={{
          drawerIcon:() => (
            <Icon name='mail-reply' size={25} color={'yellow'}/>
          ),
            headerTransparent: true,
            headerTitleStyle:{
              color:'transparent',

            }
        }}/>
        <Drawer.Screen name='Mural' component={Mural} options={{
           drawerIcon:() => (
            <Icon name='google-wallet' size={25} color={'yellow'}/>
          ),
            headerTransparent: true,
            headerTitleStyle:{
              color:'transparent',
            }
        }}/>
        <Drawer.Screen name='Mapa' component={Mapa} options={{
          drawerIcon:() => (
            <Icon name='map' size={25} color={'yellow'}/>
          ),
            headerTransparent: true,
            headerTitleStyle:{
              color:'transparent',
            }
        }}/>
        <Drawer.Screen name='pokedex' component={ApiExterna} options={{
           drawerIcon:({focused,color,size}) => (
            <Icon name='optin-monster' size={25} color={'yellow'}/>
          ),
            headerTransparent: true,
            headerTitleStyle:{
              color:'transparent',
            }
        }}/>
        <Drawer.Screen name='Configuração' component={Config} options={{
           drawerIcon:({focused,color,size}) => (
            <Icon name='gear' size={25} color={'yellow'}/>
          ),
            headerTransparent: true,
            headerTitleStyle:{
              color:'transparent',
            }
        }}/>
        <Drawer.Screen name='Narrador' component={Falar} options={{
          drawerIcon:({focused,color,size}) => (
            <Icon name='podcast' size={25} color={'yellow'}/>
          ),
            headerTransparent: true,
            headerTitleStyle:{
              color:'transparent',
            }
        }}/>
        <Drawer.Screen name='Loja' component={Loja} options={{
           drawerIcon:({focused,color,size}) => (
            <Icon name='shopping-cart' size={25} color={'yellow'}/>
          ),
            headerTransparent: true,
            headerTitleStyle:{
              color:'transparent',
            }
        }}/>
        <Drawer.Screen name='Gerador de senha' component={GeradorSenha} options={{
          drawerIcon:() => (
            <Icon name='key' size={25} color={'yellow'}/>
          ),
            headerTransparent: true,
            headerTitleStyle:{
              color:'transparent',
            }
        }}/>
        <Drawer.Screen name='Space' options={{
          drawerIcon:() => (
            <Icon name='space-shuttle' size={25} color={'yellow'}/>
          ),
            headerTransparent: true,
            headerTitleStyle:{
              color:'transparent',
            }
        }} component={BichVirtu}/>
         <Drawer.Screen name='AudioMeme' component={AudioMeme} options={{
          drawerIcon:() => (
            <Icon name='file-sound-o' size={25} color={'yellow'}/>
          ),
            headerTransparent: true,
            headerTitleStyle:{
              color:'transparent',
            }
        }}/>
         <Drawer.Screen name='Imc' component={Imc} options={{
          drawerIcon:() => (
            <Icon name='coffee' size={25} color={'yellow'}/>
          ),
            headerTransparent: true,
            headerTitleStyle:{
              color:'transparent',
            }
        }}/>
        <Drawer.Screen name='Carrossel' component={Carrossel} options={{
          drawerIcon:() => (
            <Icon name='image' size={25} color={'yellow'}/>
          ),
            headerTransparent: true,
            headerTitleStyle:{
              color:'transparent',
            }
        }}/>
        <Drawer.Screen name='WaveButton' component={WaveButton} options={{
          drawerIcon:() => (
            <Icon name='magic' size={25} color={'yellow'}/>
          ),
            headerTransparent: true,
            headerTitleStyle:{
              color:'transparent',
            }
        }}/>
        <Drawer.Screen name='Tradutor' component={Tradutor} options={{
          drawerIcon:() => (
            <Icon name='send' size={25} color={'yellow'}/>
          ),
            headerTransparent: true,
            headerTitleStyle:{
              color:'transparent',
            }
        }}/>
        <Drawer.Screen name='GeradorPDF' component={GeradorPDF} options={{
          drawerIcon:() => (
            <Icon name='file-pdf-o' size={25} color={'yellow'}/>
          ),
            headerTransparent: true,
            headerTitleStyle:{
              color:'transparent',
            }
        }}/>
        <Drawer.Screen name='GravadorVídeo' component={GravadorV} options={{
          drawerIcon:() => (
            <Icon name='video-camera' size={25} color={'yellow'}/>
          ),
            headerTransparent: true,
            headerTitleStyle:{
              color:'transparent',
            }
        }}/>
        <Drawer.Screen name='Gradient' component={Gradient} options={{
          drawerIcon:() => (
            <Icon name='qq' size={25} color={'yellow'}/>
          ),
            headerTransparent: true,
            headerTitleStyle:{
              color:'transparent',
            }
        }}/>
        <Drawer.Screen name='Telefonica' component={Telefonica} options={{
          drawerIcon:() => (
            <Icon name='phone-square' size={25} color={'yellow'}/>
          ),
            headerTransparent: true,
            headerTitleStyle:{
              color:'transparent',
            }
        }}/>
      </Drawer.Navigator>
      </NavigationContainer>
  )
}
const Styles = StyleSheet.create({
})
