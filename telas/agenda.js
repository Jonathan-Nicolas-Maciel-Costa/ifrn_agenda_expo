import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, {useState, useEffect,} from 'react';
import { Checkbox_field } from '../src/componentes/checkbox';

const lixeira = require('../src/icones/lixeira.svg')

export function Agenda() {
  const [total_tarefas, setTtarefas] = useState (0)
  const [cor, setCor] = useState(['#C4C4C4','white'])
  return (
    <View style={styles.container}>

      <View style={styles.first_view}>
        <Text  style={styles.text_0}>Agenda.IFRN</Text>
        <Text style={styles.text_1}>Você tem {total_tarefas} tarefas</Text>
      </View>

      <View style={styles.gap}>

      </View>

      <View style={styles.lista}>
        <Checkbox_field texto='Pagar boleto'/>
        <View style={{height: '48px', justifyContent: 'center'}}>
          <TouchableOpacity>
            <Image source={lixeira} style={{ width: "16px",height: "18px",}}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  first_view:
  {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1DB863',
    alignItems:'center',
    width: '100%',
    height: '150px'
  },
  text_0:
  {
    fontFamily: 'arial',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '24px',
    color:'white'
  },
  text_1:
  {
    fontFamily: 'arial',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    color:'white'
  },
  gap:
  {
    height: '38px',
  },
  lista:
  {
    flexDirection: 'row',
    width:  "100%",
    height: '48px',
    justifyContent: 'space-around',
    alignItems:'center',
    backgroundColor: '#C4C4C4'
  },
});
