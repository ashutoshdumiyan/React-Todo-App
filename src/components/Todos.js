import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    let result = [];
    this.props.todos.forEach(todo => {
      result.push(
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={this.props.toggleComplete}
          deleteItem={this.props.deleteItem}
        />
      );
    });
    return result;
  }
}

export default Todos;
