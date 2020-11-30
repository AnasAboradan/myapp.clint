import React, { useState } from 'react';
import { Button, View ,Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/homeStak/homeStak'
import SettingsStack from './screens/settingsStack/settingsStack'
import Drowercontent from './drowercontent';
import Login from './login';




const Drawer = createDrawerNavigator();

export default function App() {
 const [login, setLogin] = useState(false);
 if(login)
 {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" 
      screenOptions={{ headerShown: false, }}
      drawerContent={(props)=><Drowercontent {...props} setLogin={setLogin}/>}>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
 }
 else{
   return(
  <Login setLogin={setLogin} ></Login>
   );

 }
}