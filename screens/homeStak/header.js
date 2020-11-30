import React from 'react'
import { View, Text,StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function header({navigation,title}) {
    return (
        <View style={styles.contanar}>
             <MaterialCommunityIcons style={{marginLeft:5}} name="arrow-left" color={'black'} size={28}
             onPress={()=>navigation.navigate('Home')} />
             <Text style={styles.text}>{title}</Text>
             <MaterialCommunityIcons style={{marginRight:10}} name="menu" color={'black'} size={28} 
             onPress={()=>navigation.openDrawer()} />
        </View>
    )
}
const styles=StyleSheet.create({
    contanar:{
    width:"100%",
    backgroundColor:'#FFF',
    height:50,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  text:{
      fontSize:24,
      
  }


});