import * as React from 'react';
import { Text, View, StyleSheet ,ScrollView,Button,FlatList} from 'react-native';
export const Row = (props) => (
   <View>
      <Text>{props.name}</Text>
      <Text>{props.phone}</Text>
      </View>
)