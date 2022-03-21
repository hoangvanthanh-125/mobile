import React from 'react';
import {View,Text,Button} from 'react-native'

function LoginScreen({navigation}) {
  return (
   <View>
     <Button title='Login' onPress={() => navigation.navigate('contact')} />
   </View>
  );
}

export default LoginScreen;