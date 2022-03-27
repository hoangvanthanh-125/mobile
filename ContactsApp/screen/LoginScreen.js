import React, { useEffect, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/actions";

function LoginScreen({ navigation }) {
  const {err,token} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async() => {
    dispatch(loginAction(user.email,user.password));
  };
  const handleChange = (key) => (val) =>
    setuser({
      ...user,
      [key]: val,
    });
    useEffect(() => {
       if(token){
        navigation.navigate("contact");
      }
    },[token])
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleChange("email")}
        placeholder="Nhập email"
      />
      <TextInput
        style={styles.input}
        onChangeText={handleChange("password")}
        placeholder="Nhập mật khẩu"
      />
      <Button title="Login" onPress={() => handleSubmit()} />{" "}
    </View>
  );
}

export default LoginScreen;
const styles = StyleSheet.create({
  input: {
    borderColor: "purple",
    borderWidth: 1,
    marginBottom: 10,
  },
  container: {
    padding: 20,
  },
});
