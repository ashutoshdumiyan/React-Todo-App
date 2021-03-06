import React, { Component } from "react";

export class AddTodo extends Component {
  state = { title: "" };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (e.target.title.value === "") {
      alert("Enter some to-do item...");
      return;
    }
    this.props.addItem(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form action="" acceptCharset="UTF-8" onSubmit={this.onSubmit}>
            <div className="input-group">
              <input
                style={{
                  borderTopRightRadius: "0.25rem",
                  borderBottomRightRadius: "0.25rem"
                }}
                type="text"
                name="title"
                placeholder="Add an item to the list..."
                className="form-control"
                value={this.state.title}
                onChange={this.onChange}
              />
              &nbsp;&nbsp;
              <span className="input-group-btn">
                <button type="submit" className="btn btn-primary">
                  <i class="fas fa-paper-plane"></i>&nbsp;&nbsp;Submit
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddTodo;
