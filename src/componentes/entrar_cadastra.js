import React, {useState} from 'react';
import { View, TextInput, TouchableOpacity, Text, Button } from 'react-native';

export function Entrar_cadastrar (text, backgColor, width, marginTop) {
  var color = text.backgColor
  console.log(color)
  return (
    
    <View>
      <TouchableOpacity style={{backgroundColor: text.backgColor, width:text.width, height:'49px', justifyContent:'center', marginTop:text.marginTop}}>
        <Text style={{color:'white', textAlign:'center'}}>
          {text.text}
        </Text>
      </TouchableOpacity>
    </View>
    
  );
}
