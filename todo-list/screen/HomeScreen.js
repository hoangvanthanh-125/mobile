import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ListTodo from "../components/ListTodo";
import Icon from "react-native-vector-icons/FontAwesome";

function HomeScreen({navigation}) {
  return (
    <View style={{padding:10}}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{flexDirection:'row',justifyContent:'flex-end'}}>
        <Icon style={{ marginRight: 5 }} name="user" size={20} color="teal" />
          <Text>Tài khoản</Text>
        </TouchableOpacity>
      </View>
      <Text style={{color:'teal',fontSize:25,fontWeight:'bold',marginBottom:10,textAlign:'center'}}>List Todo</Text>
     <ListTodo navigation={navigation} />
     <TouchableOpacity onPress={() => navigation.navigate('Add',{
       title:'Thêm'
     })} style={styles.button}>
       <Text style={styles.text}>
         +
       </Text>
     </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  button:{
    position:'fixed',
    right:20,
    bottom:20,
    width:40,
    height:40,
    backgroundColor:'teal',
    borderRadius:40,
    padding:5
  },
  text:{
    textAlign:'center',
    fontSize:17,
    fontWeight:'bold',
    color:'white'
  }
})