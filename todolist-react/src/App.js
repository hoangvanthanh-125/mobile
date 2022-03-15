import "./App.css";
import React from "react";
const Todo = ({ text, checked,toggleTodo,removeTodo,addTodo }) => (
  <li>
    <input type="checkbox" checked={checked} />
    <button type="button" onClick={removeTodo}>delete</button>
    <span>{text}</span>
  </li>
);
var id = 0;

class App extends React.Component {
  constructor(props) {
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
      <div>
        <h1>Todo list</h1>
        <button type="button" onClick={() => this.addTodo()}>AddTodo</button>
       <ul>
       {this.state.listTodo.map((todo) => (
          <Todo
            text={todo.text}
            removeTodo={() => this.removeTodo(todo.id)}
            toggleTodo={() => this.toggleTodo(todo.item)}
          />
        ))}
       </ul>
      </div>
    );
  }
}

export default App;
