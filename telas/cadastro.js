import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Cadastro_text_input } from '../src/componentes/cadastro_compo';
import { Entrar_cadastrar } from '../src/componentes/entrar_cadastra';
import { Picker_field } from '../src/componentes/picker';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export function Cadastro( {navigation} ) {

  function openScreen(){
    navigation.navigate('Agenda')
  }
  return (

    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Tarefa</Text>

      <View style={styles.flex_space}>
        <Cadastro_text_input Holder="Titulo "/>
        <Cadastro_text_input Holder="Descrição: "/>
        <Picker_field/>
        <Cadastro_text_input Holder="Data"/>
      </View>
      <TouchableOpacity onPress={openScreen} style={{backgroundColor: '#1DB863', width:'312px', height:'49px', justifyContent:'center', marginTop:'15px'}}>
            <Text style={{color:'white', textAlign:'center'}}>
            Cadastrar
            </Text>
      </TouchableOpacity>
      {/* <Entrar_cadastrar text='Cadastrar' backgColor='#1DB863' width='312px' marginTop='15px'/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  titulo:{
    color:'#1DB863',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '28px',
    textAlign: 'center',
    marginTop: '58px',
    marginBottom: '20px'
  },
  flex_space:
  {
    justifyContent:'space-evenly',
    height: '40%'
  },
  m_top:
  {
    marginTop:'155px',
  }
});
