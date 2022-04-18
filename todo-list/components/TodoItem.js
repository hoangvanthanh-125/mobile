import React from "react";
import { View, Text, StyleSheet, ViewBase } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { axiosClient } from "../apis/axiosClient";
import { deleteTodo } from "../redux/actions";

function TodoItem({ todo, navigation }) {
  const {
    user: { _id },
    token,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleDeleteTodo = async (id) => {
    try {
      const res = await axiosClient.delete(`/list/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      dispatch(deleteTodo(todo._id));
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = () => {
    navigation.navigate("Add", {
      todo,
      title: "Sửa",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{todo.content}</Text>
      <View style={[styles.container,{border:'none'}]}>
        <Icon
          onClick={() => handleEdit()}
          style={{ marginRight: 15 }}
          name="edit"
          size={20}
          color="red"
        />
        <Icon
          onPress={() => handleDeleteTodo(todo._id)}
          name="trash-o"
          size={20}
          color="red"
        />
      </View>
    </View>
  );
}

export default TodoItem;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth:1,
    borderColor:'teal'
  },
  text: {
    color: "teal",
  },
});
