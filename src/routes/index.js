import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Index } from '../../telas';
import { Cadastro } from '../../telas/cadastro';
import { Agenda } from '../../telas/agenda';

const { Screen, Navigator} = createNativeStackNavigator();


export function Stackroutes(){
    return(
        <Navigator>
            <Screen
            name="Login"
            component={Index}
            />

            <Screen
            name="Cadastro"
            component={Cadastro}
            />

            <Screen
            name="Agenda"
            component={Agenda}
            />

        </Navigator>
    )
}