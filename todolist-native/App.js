import React from "react";
import {View,Text,Switch,Button,ScrollView,StyleSheet} from 'react-native';
import {Constants} from 'expo';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop:50,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  todoItem: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
      },
});

const Todo = ({ text, checked,toggleTodo,removeTodo,addTodo }) => (
  <View style={styles.todoItem}>
    <Switch  value={checked} onValueChange={toggleTodo} />
    <Button type="button" onPress={removeTodo} title='delete' />
    <Text>{text}</Text>
  </View>
);
var id = 0;

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listTodo: [],
    };
  }
  addTodo() {
    const text = `Todo thứ ${id}`;
    this.setState({
      listTodo: [
        ...this.state.listTodo,
        {
          id:++id,
          text,
          checked: false,
        },
      ],
    });
    
  }
  removeTodo(id) {
    this.setState({
      listTodo: this.state.listTodo.filter((item) => item.id !== id),
    });
  }
  toggleTodo(id) {
    this.setState({
      listTodo: this.state.listTodo.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          checked: !item.checked,
        };
      }),
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>todo list</Text>
        <Button  onPress={() => this.addTodo()} title='addTodo' />
       <ScrollView>
       {this.state.listTodo.map((todo) => (
          <Todo
            text={todo.text}
            removeTodo={() => this.removeTodo(todo.id)}
            toggleTodo={() => this.toggleTodo(todo.id)}
            checked={todo.checked}
          />
        ))}
       </ScrollView>
      </View>
    );
  }
}



