import React, {useState} from 'react';
import { View, TextInput } from 'react-native';

export function Text_Input_Box (Holder) {

  console.log(Holder,"<<<<")
  return (
    <View>
      <TextInput placeholder= {Holder.Holder} style={{width: '254px',height: '42px',backgroundColor: "white",borderRadius: '5px', paddingLeft:'16px', color: "#B2B2B2"}} />
    </View>
  );
}
