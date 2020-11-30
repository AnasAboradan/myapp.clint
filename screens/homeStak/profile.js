import React, { Component }  from 'react'
import { View, Text, Button,StyleSheet } from 'react-native'
import Header from './header'
export default function  Profile({navigation}) 
{
    return(
        <View style={styles.contanar}>
        <View>
        <Header title={'Profile'} navigation={navigation}></Header>
        </View>
        <Text>
            Profile 
        </Text>
        </View>
    );


}
const styles=StyleSheet.create({
    contanar:{
        flex:1,
        backgroundColor:'red'

    }
});
