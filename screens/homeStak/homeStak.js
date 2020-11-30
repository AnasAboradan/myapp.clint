import  React,{component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Profile from './profile'

const Stack = createStackNavigator();

 function HomeStack({navigation})
{

     return(
<Stack.Navigator
screenOptions={{headerShown:false,}}
>
        <Stack.Screen
        
          name="Home"
          component={Home}
          options={{ title: 'Home', 
          headerTitleAlign: 'center',
          
        }}
        />
        <Stack.Screen name="Profile" 
        component={Profile} 
        options={{headerTitleAlign: 'center' }}/>
      </Stack.Navigator>
     );
 
 
}
export default HomeStack; 