import React from 'react';
import { View,Text } from 'react-native';

function DetailContactScreen({route:{params},navigation}) {
  const {name,phone} = params;
  return (
    <View style={{padding:10}}>
      <Text style={{marginBottom:10}} > Tên : {name}</Text>
      <Text> Số điện thoại : {phone}</Text>

    </View>
  );
}

export default DetailContactScreen;