import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateUserApi } from "../apis/todo";
import { updateUserAction } from "../redux/actions";

function EditProfileScreen({ navigation, route }) {
  const { title, content } = route?.params;
  const {
    user: { _id },
    token,
  } = useSelector((state) => state.user);
  const [contentEdit, setContentEdit] = useState(content || "");
  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const handleEdit = async () => {
    if (contentEdit && contentEdit.trim()) {
      try {
        if (contentEdit !== content) {
          const data = await updateUserApi(
            { [title]: contentEdit },
            _id,
            token
          );
          dispatch(updateUserAction(data));
        }
        navigation.navigate("Profile");
      } catch (error) {
        console.log(error?.response);
        if (error?.response?.status === 400) {
          setErr("Email đã tồn tại");
      
        } else if (error?.response?.status === 500) {
          setErr("Lỗi server");
        }
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "teal",
          fontSize: 25,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Edit {title}
      </Text>
      {err && (
        <Text style={{ margin: 10, color: "red", fontSize: 12 }}>{err}</Text>
      )}
      <TextInput
        style={styles.input}
        value={contentEdit}
        onChangeText={(text) => setContentEdit(text)}
      />
      <View style={styles.wrapButton}>
        <TouchableOpacity onPress={() => handleEdit()} style={styles.button}>
          <Text style={styles.text}>Xác nhận</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={[styles.button, { backgroundColor: "red" }]}
        >
          <Text style={styles.text}>Hủy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default EditProfileScreen;
const styles = StyleSheet.create({
  button: {
    backgroundColor: "teal",
    padding: 5,
    borderRadius: 5,
    width: 100,
    margin: 10,
  },
  input: {
    borderBottomColor: "teal",
    borderBottomWidth: 1.5,
    marginBottom: 25,
    outlineStyle: "none",
    width: 300,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  wrapButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
