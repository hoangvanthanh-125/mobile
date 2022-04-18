import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/actions";

function FormLogin({ navigation, params }) {
  const [email, setEmail] = useState(params?.email);
  const [password, setPassword] = useState(params?.password);
  const {error,token} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    dispatch(loginAction(email, password));
  };
  useLayoutEffect(() => {
   if(token){
     navigation.navigate('Home');
   }
  },[token])
  return (
    <View style={styles.container}>
      {error && <Text style={{color:'red',fontSize:12,marginBottom:10,fontWeight:480}}>{error}</Text>}
      <TextInput
        onChangeText={(email) => setEmail(email)}
        style={styles.input}
        placeholder="Nhập email"
        defaultValue={params?.email}
      />
      <TextInput
        onChangeText={(password) => setPassword(password)}
        style={styles.input}
        placeholder="Nhập mật khẩu"
        secureTextEntry={true}
        defaultValue={params?.password}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text style={{ color: "white", textAlign: "center" }}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text
          style={{
            color: "teal",
            textAlign: "center",
            fontSize: 12,
            marginTop: 10,
            fontWeight: "500",
          }}
        >
          Bạn chưa có tài khoản ?{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderBottomColor: "teal",
    borderBottomWidth: 1.5,
    marginBottom: 25,
    width: 350,
    outlineStyle: "none",
  },
  container: {
    marginTop: 10,
    padding: 10,
    paddingBottom: 30,
    paddingTop: 30,
    borderColor: "teal",
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "teal",
    padding: 5,
    borderRadius: 5,
    width: "100%",
  },
});
export default FormLogin;
