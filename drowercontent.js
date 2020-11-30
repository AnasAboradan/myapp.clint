import React from 'react'
import { DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import { View, Text, Button,Image } from 'react-native'
function drowercontent(props) {
    return (
        <View style={{backgroundColor:'red', flex:1}}>
            <View style={{alignItems:'center' , marginTop:40,marginBottom:15}}>
          
            <Image  style={{width:100, height:100,borderRadius:50}} source={require('./logo.png')}
            />
           </View>
        <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View style={{flex:1, justifyContent:'flex-end'}}>
           <Button title='Log ut' onPress={()=>props.setLogin(false)}></Button>
        </View>
      </View>
    )
}

export default drowercontent
