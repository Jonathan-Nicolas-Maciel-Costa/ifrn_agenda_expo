import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Text_Input_Box } from '../src/componentes/login_text_input_box';
import { Entrar_cadastrar } from '../src/componentes/entrar_cadastra';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const if_logo = require('../assets/imgs/if_svg.svg')




export function Index( {navigation} ) {

  function openScreen(){
    navigation.navigate('Cadastro')
  }

  return (
    
    <View style={styles.container}>
      <View style={styles.margin_b}>
        <Image source={if_logo} style={styles.img_logo}/>
        <Text style={styles.titulo}>Agenda IFRN</Text>
        <View style={styles.margin_c}>
          <Text_Input_Box Holder = {"Login"}/>
          <Text_Input_Box Holder = {"Senha"}/>

          <TouchableOpacity onPress={openScreen} style={{backgroundColor: '#666666', width:'254px', height:'49px', justifyContent:'center'}}>
            <Text style={{color:'white', textAlign:'center'}}>
              Entrar
            </Text>
          </TouchableOpacity>


          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1DB863',

  },
  img_logo: {
    width: "78px",
    height: "99px",
    color: "green",
    backgroundColor: '#1DB863',
  },
  titulo:{
    color:'white',
    fontFamily: 'arial',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '36px',
    textAlign: 'center',
    width: '172px',
  },
  margin_c:
  {
    height:"170px",
    alignItems: 'center',
    justifyContent: "space-around"
  },
  margin_b:
  {
    marginTop: "5%",
    height:"400px",
    alignItems: 'center',
    justifyContent: "space-around"
  }
});
