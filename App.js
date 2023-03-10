import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Index } from './telas/index'
import { Cadastro } from './telas/cadastro';
import { Agenda } from './telas/agenda';

import { createStackNavigator } from '@react-navigation/stack'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (


    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ Index }/>
        <Tab.Screen name="Cadastro" component={ Cadastro }/>
        <Tab.Screen name="Agenda" component={ Agenda }/>
      </Tab.Navigator>
        
      {/* Rest of your app code */}
    </NavigationContainer>
  );
}
