import React,{useState} from 'react';
import { View ,Text} from 'react-native';
import FormAddTodo from '../components/FormAddTodo';

function AddTodoScreen({navigation,route}) {
  const todo= route?.params?.todo
  
  return (
   <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
     <FormAddTodo navigation={navigation} todo={todo} />
   </View>
  );
}

export default AddTodoScreen;