import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { registerApi } from "../apis/auth";

function FormRegister({ navigation }) {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const handleSubmit = async () => {
    try {
      const response = await registerApi(email, password, fullName);
      const { user } = response;
      setErr("");
      navigation.navigate("Login", {
        email: user.email,
        password: user.password,
      });
    } catch (error) {
      setErr(error.message);
    }
  };
  return (
    <View style={styles.container}>
      {err && <Text style={{color:'red',fontSize:12,marginBottom:10,fontWeight:480}}>{err}</Text>}
      <TextInput
        onChangeText={(email) => setEmail(email)}
        style={styles.input}
        placeholder="Nhập email"
      />
      <TextInput
        onChangeText={(password) => setPassword(password)}
        style={styles.input}
        placeholder="Nhập mật khẩu"
        secureTextEntry={true}
      />
      <TextInput
        onChangeText={(fullName) => setFullName(fullName)}
        style={styles.input}
        placeholder="Nhập tên"
      />

      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text style={{ color: "white", textAlign: "center" }}>Đăng kí</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text
          style={{
            color: "teal",
            textAlign: "center",
            fontSize: 12,
            marginTop: 10,
            fontWeight: "500",
          }}
        >
          Bạn đã có tài khoản ?{" "}
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
export default FormRegister;
