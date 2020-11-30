import React from 'react'
import { Component }  from 'react'
import { View, Text, Button } from 'react-native'

export default class SEtting extends Component{
    constructor(props){
        super(props)
    }
render(){
    return(
    <Button title='Go to detalis' onPress={()=>props.navigation.navigate('detalies')}>

    </Button>
    );
}

}
