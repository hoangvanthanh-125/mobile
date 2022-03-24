import React from 'react';
import { View,Text } from 'react-native';

function DetailContactScreen({route:{params},navigation}) {
  const {name,phone} = params;
  return (
    <View>
      <Text>{name}</Text>
      <Text>{phone}</Text>

    </View>
  );
}

export default DetailContactScreen;