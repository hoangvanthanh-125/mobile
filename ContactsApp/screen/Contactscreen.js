import React, { useContext } from "react";
import { Button, View } from "react-native";
import { useSelector } from "react-redux";
import { MyContext } from "../App";
import { ContactList } from "../components/ContactList";
function Contactscreen({navigation}) {
  
  
  const {contacts} = useSelector(state => state)
  return (
    <View style={{padding:10}} >
     <View style={{marginBottom:10}}>
   
     </View>
      <Button title="Add" onPress={() =>navigation.navigate('add') } />
      <ContactList navigation={navigation} contacts={contacts} />
    </View>
  );
}

export default Contactscreen;
