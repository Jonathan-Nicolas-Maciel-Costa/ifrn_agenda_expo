import React, {useState} from 'react';
import { View, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export function Picker_field (Holder) {
  const [valores, setValores] = useState  (['Categoria:', 'naosei', 'naosei', 'naosei',])
  const [valoresSelecionados, setSvalores] = useState ([])
  return (
    <View style={{ width: '313px', height: '50px'}}>  
        <Picker
            selectedValue={valoresSelecionados}
            placeholder='Categoria: '
            onValueChange={(value) =>
                setSvalores(value)}
                style={{ color: "#B2B2B2",
                width: '313px',
                height: '50px',
                borderWidth: "1px",
                borderColor: "#B2B2B2",
                borderRadius: '5px',
                padding: "5%"}}>
            
                {
                    valores.map(cr => {
                        return <Picker.Item label={cr} value={cr} />    
                    })
                }
        </Picker>
                    
    </View>
  );
}
