import  React,{component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Setting from './setting';
import Detalies from './detalies';

const Stack = createStackNavigator();

function SettingsStack ()
{

     return(
<Stack.Navigator>
        <Stack.Screen
          name="setting"
          component={Setting}
          options={{ title: 'Setting' }}
        />
        <Stack.Screen name="detalies" 
        component={Detalies} />
      </Stack.Navigator>
     );
 
}

 export default SettingsStack; 
