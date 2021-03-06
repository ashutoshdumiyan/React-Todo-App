import React, { Component } from "react";

export class TodoItem extends Component {
  getStyle = () => {
    return this.props.todo.completed
      ? {
          textDecoration: "line-through",
          background: "#f4f4f4"
        }
      : {
          textDecoration: "none",
          background: "#f4f4f4"
        };
  };

  getDivStyle = () => {
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px solid #777777"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getDivStyle()}>
        <form>
          <div className="form-group form-check" style={{ marginBottom: 0 }}>
            <input
              className="form-check-input"
              id={`Checkbox${id}`}
              type="checkbox"
              onChange={this.props.toggleComplete.bind(this, id)}
            />
            <label
              className="form-check-label"
              style={this.getStyle()}
              htmlFor={`Checkbox${id}`}
            >
              {title}
            </label>
          </div>
        </form>
        <button
          onClick={this.props.deleteItem.bind(this, id)}
          className="btn btn-primary"
        >
          <i class="fas fa-trash-alt"></i>&nbsp;&nbsp;Delete
        </button>
      </div>
    );
  }
}

export default TodoItem;
