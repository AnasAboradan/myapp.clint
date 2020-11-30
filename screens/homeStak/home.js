import React, { useState } from 'react'
import { View, Text, Button ,StyleSheet} from 'react-native';
import Header from './mainheader';
import * as RNLocalize from "react-native-localize";
import {code} from './coun';

export default function Home({navigation})
{
    
    const [country,setContry]=useState('');
    const [code,setCode]=useState('');
    
    
    const getGeoInfo=()=>
     {  
       fetch('http://ipinfo.io/?token=8e7cfa4028878a')
        .then(res => res.json())
        .then(data => setContry(code[data["country"]]));
        console.log(country);
       
    };
    return(
    <View style={styles.contanar}>
        <View>
        <Header title={'Home'} navigation={navigation}></Header>
        </View>
    <Button title='Go to profile' onPress={()=>navigation.navigate('Profile')}>

    </Button>
    <Button title='hello' onPress={getGeoInfo}>

    </Button>
    </View>
    );
   

}

const styles=StyleSheet.create({
    contanar:{
        flex:1,
        backgroundColor:'red'

    }
});
