import React from 'react'
import { View, Text, Button } from 'react-native'

export default function login(props) {
    return (
        <View>
       <Button title='Login' onPress={()=>props.setLogin(true)}>

       </Button>
        </View>
    )
}
