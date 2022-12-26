import React, {useState} from 'react';
import { View, TextInput } from 'react-native';

export function Cadastro_text_input (Holder) {

  console.log(Holder,"<<<<")
  return (
    <View style={{ width: '313px', height: '50px'}}>  
      <TextInput placeholder= {Holder.Holder} style={{ color: "#B2B2B2",
                                                       width: '313px',
                                                       height: '50px',
                                                       borderWidth: "1px",
                                                       borderColor: "#B2B2B2",
                                                       borderRadius: '5px',
                                                       padding: "5%"}} />
    </View>
  );
}
