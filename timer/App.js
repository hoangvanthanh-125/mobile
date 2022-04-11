import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
export default function App() {
  var timeInterval;

  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(5);
  const [toggleRunning, setToggleRunning] = useState(false);
  const [inputMinute, setInputMinute] = useState();
  const [inputSecond, setInputSecond] = useState();

  clearInterval(timeInterval);
  const handleSetTimmer = () => {
    const minute = Number.parseInt(inputMinute);
    const second = Number.parseInt(inputSecond);
    if (
      typeof minute === "number" &&
      typeof second === "number" &&
      inputMinute >= 0 &&
      inputSecond >= 0
      && minute <=59
    ) {
      setMinute(inputMinute);
      setSecond(inputSecond);
    } else {
      alert("loi");
    }
  };
  useEffect(() => {
    if (toggleRunning) {
      timeInterval = setInterval(() => {
        setSecond((prev) => prev - 1);
      }, 1000);
      if (second < 0) {
        setSecond(59);
        setMinute((prev) => prev - 1);
      }
      if (second === 0 && minute === 0) {
        clearInterval(timeInterval);
      }
    } else {
      clearInterval(timeInterval);
    }
    return () => {
      clearInterval(timeInterval);
    };
  }, [second, minute, toggleRunning]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer</Text>
      <View style={styles.clock}>
        <Text style={styles.timer}>
          {minute >= 10 ? minute : "0" + minute} :
          {second >= 10 ? second : "0" + second}
        </Text>
      </View>
      <View style={styles.wrap}>
        <TextInput
          keyboardType="numeric"
          onChangeText={(minute) => setInputMinute(minute)}
          style={styles.input}
          value={inputMinute}
        />
        <Text>phút</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={(second) => setInputSecond(second)}
          value={inputSecond}
          style={styles.input}
        />
        <Text style={{ marginRight: 10 }}>giây</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSetTimmer()}
        >
          <Text style={styles.text}>Đặt</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrap}>
        <TouchableOpacity
          style={[styles.button,styles.buttonRunning]}
          onPress={() => setToggleRunning(prev => !prev)}
        >
          <Text style={styles.text}>{toggleRunning ? 'Dừng' : "Chạy"}</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title:{
    fontSize:30,
    color:"red",
    fontWeight:"bold",
    marginBottom:10
  },
  timer: {
    fontSize: 30,
    fontWeight: "bold",
    color:'red',
  },
  clock: {
    padding: 30,
    borderWidth: 10,
    borderColor: "black",
    borderRadius: 20,
    margin:10

  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    width: 50,
    flex: 1,
    borderRadius: 5,
    borderColor: "gray",
  },
  wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    marginLeft: 10,
    backgroundColor: "black",
    textAlign: "center",
    borderRadius: 5,
    padding:5,
  },
  buttonRunning:{
    width:200,
    margin:10
  },
  text:{
    color:'white'
  }
  
});
