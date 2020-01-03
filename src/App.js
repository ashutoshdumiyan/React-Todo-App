import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/About";
import "./App.css";
// import uuid from "uuid";
import Axios from "axios";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(
      res => {
        try {
          let elem = document.querySelector(".spinner-border");
          elem.style.display = "none";
        } catch (error) {
          console.log(error);
        }
        this.setState({ todos: res.data });
      }
    );
  }

  // Toggle complete
  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Add Item
  addItem = title => {
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false
    }).then(res => {
      this.setState({
        todos: [...this.state.todos, res.data]
      });
    });
  };

  // Delete Item
  deleteItem = id => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      res => {
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        });
      }
    );
  };

  render() {
    // this "if" condition is for show/hide the loading spinner
    if (this.state.todos.length !== 0) {
      return (
        <Router>
          <div className="container">
            <Header />
            <br />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addItem={this.addItem} />
                  <br />
                  <Todos
                    todos={this.state.todos}
                    toggleComplete={this.toggleComplete}
                    deleteItem={this.deleteItem}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </Router>
      );
    } else {
      return (
        <Router>
          <div className="container">
            <Header />
            <br />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addItem={this.addItem} />
                  <br />
                  <div className="spinner-border"></div>
                  <Todos
                    todos={this.state.todos}
                    toggleComplete={this.toggleComplete}
                    deleteItem={this.deleteItem}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </Router>
      );
    }
  }
}

export default App;
