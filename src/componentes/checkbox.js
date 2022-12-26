import React, {useState} from 'react';
import { View, Text,  TextInput, Image } from 'react-native';
import Checkbox from 'expo-checkbox';

export function Checkbox_field (texto) {
  const [ischecked, setIschecked] = useState(0)
  return (
    <View style={{flexDirection:'row', height: '48px', alignItems:'center'}}>
      <Checkbox value={ischecked} onValueChange={setIschecked} />
      <Text style={{marginLeft: '15px'}}>{texto.texto}</Text> 
    </View>
  );
}
