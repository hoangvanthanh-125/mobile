import React from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { logoutAction } from "../redux/actions";

function ProfileScreen({ navigation }) {
  const { user } = useSelector((state) => state.user);
  const userArr = Object.keys(user);
  const dispatch = useDispatch();
  const handleEdit = (field, content) => {
    navigation.navigate("Edit Profile", {
      title: field,
      content,
    });
  };
  return (
    <ScrollView>
      {userArr.map((item, index) => {
        if (["fullName", "email", "password"].includes(item)) {
          return (
            <TouchableOpacity style={styles.container} key={index}>
              <Text style={styles.title}>{item}</Text>
              <View style={styles.container1}>
                {item === "password" ? (
                  <Text style={[styles.content, { fontWeight: "bold" }]}>
                    {Array.from({ length: user[item].length }, () => ".")}
                  </Text>
                ) : (
                  <Text style={styles.content}>{user[item]}</Text>
                )}
                <Icon
                  onPress={() => handleEdit(item, user[item])}
                  style={{ marginRight: 5 }}
                  name="edit"
                  size={20}
                  color="red"
                />
              </View>
            </TouchableOpacity>
          );
        }
      })}
      <TouchableOpacity
        onPress={() => dispatch(logoutAction())}
        style={[styles.container,{padding:15}]}
      >
        <Text style={styles.title}>Đăng xuất</Text>
        
      </TouchableOpacity>
    </ScrollView>
  );
}

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingLeft: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "teal",
    borderBottomWidth: 1,
  },
  container1: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
  },
  content: {
    color: "gray",
    marginRight: 30,
  },
});
