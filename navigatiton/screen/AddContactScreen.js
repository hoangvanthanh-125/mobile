import React from "react";
import { View } from "react-native";
import { useContext } from "react";
import FormAddContact from "../components/FormAddContact";
import { MyContext } from "../App";

function AddContactScreen({navigation}) {
  const {addContact} = useContext(MyContext);
  return (
    <View>
      <FormAddContact addContact={addContact} navigation={navigation} />
    </View>
  );
}

export default AddContactScreen;
