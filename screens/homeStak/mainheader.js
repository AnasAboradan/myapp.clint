import React from 'react'
import { View, Text,StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function header({navigation,title}) {
    return (
        <View style={styles.contanar}>
             <MaterialCommunityIcons style={{marginLeft:10}} name="menu" color={'black'} size={35} 
             onPress={()=>navigation.openDrawer()} />
             <Text style={styles.text}>{title}</Text>
            
        </View>
    )
}
const styles=StyleSheet.create({
    contanar:{
    width:"100%",
    backgroundColor:'#FFF',
    height:50,
    flexDirection:'row',
    
    alignItems:'center'
  },
  text:{
      fontSize:24,
      marginLeft:125
     
      
  }


});