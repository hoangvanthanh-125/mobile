import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTodoApi, updateTodoApi } from "../apis/todo";
import { addTodoAction, updateTodoAction } from "../redux/actions";

function FormAddTodo({ navigation, todo }) {
  const [content, setContent] = useState(todo?.content || "");
  const { user, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleAddTodo = async () => {
    if (content && content.trim()) {
      if (!todo) {
        try {
          const data = await addTodoApi(content, user._id, token);
          dispatch(addTodoAction(data));

          navigation.dispatch(resetAction);
        } catch (error) {
          console.log(error.message);
        }
      } else {
        const data = await updateTodoApi({ content }, todo._id, token);
        dispatch(updateTodoAction(todo._id, data));
      }
      navigation.navigate("Home");
    }
  };

  return (
    <View styles={styles.container}>
      <Text
        style={{
          color: "teal",
          fontSize: 25,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        {todo ? "Edit Todo" : "Add Todo"}
      </Text>
      <TextInput
        value={content}
        onChangeText={(content) => setContent(content)}
        style={styles.input}
        placeholder="Nhập todo"
      />
      <TouchableOpacity style={styles.button} onPress={() => handleAddTodo()}>
        <Text style={styles.text}>{todo ? "Sửa" : "Thêm"}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default FormAddTodo;
const styles = StyleSheet.create({
  button: {
    backgroundColor: "teal",
    padding: 5,
    borderRadius: 5,
  },
  input: {
    borderBottomColor: "teal",
    borderBottomWidth: 1.5,
    marginBottom: 25,
    outlineStyle: "none",
    width: 300,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
