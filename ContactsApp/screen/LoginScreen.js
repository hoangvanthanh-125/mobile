import React from 'react';
import {View,Text,Button,TextInput} from 'react-native'
import { useState } from 'react';

function LoginScreen({navigation}) {
  const [user,setuser] = useState({
    name:'',
    password:''
  });
;
const handleChange = (key) => val => setuser({...user,[key]:val});
  return (
   <View>
     <TextInput onChangeText={handleChange('name')} />
     <TextInput onChangeText={handleChange('password')} />
     <Button title='Login' onPress={() => navigation.navigate('contact')} />
   </View>
  );
}

export default LoginScreen;