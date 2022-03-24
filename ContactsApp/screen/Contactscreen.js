import React from "react";
import { View, Button } from "react-native";
import { useContext } from "react";
import { ContactList } from "../components/ContactList";
import FormAddContact from "../components/FormAddContact";
import { MyContext } from "../App";
import { useSelector } from "react-redux";
function Contactscreen({navigation}) {
  // const {contacts,sortList} = useContext(MyContext)
  // console.log(c.contacts + "haha");
  const {contacts} = useSelector(state => state)
  return (
    <View >
      <Button
        style={{ backgroundColor: "red" }}
        title="sort"
        onPress={() => sortList()}
      />
      <Button
        title="toggle"
        // onPress={this.toggleContact}
      />
      <Button title="add" onPress={() =>navigation.navigate('add') } />

      <ContactList navigation={navigation} contacts={contacts} />
    </View>
  );
}

export default Contactscreen;
