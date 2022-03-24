import React from "react";
import { View } from "react-native";
import { useContext } from "react";
import FormAddContact from "../components/FormAddContact";
import { MyContext } from "../App";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/actions";

function AddContactScreen({ navigation }) {
  // const {addContact} = useContext(MyContext);
  const dispatch = useDispatch();
  const addToContacts = (formState) => {
    dispatch(addContact(formState));
    navigation.navigate("contact");
  };
  return (
    <View>
      <FormAddContact addContact={addToContacts} navigation={navigation} />
    </View>
  );
}

export default AddContactScreen;
