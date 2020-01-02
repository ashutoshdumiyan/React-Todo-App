import React, { Component } from "react";

export class AddTodo extends Component {
  state = { title: "" };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
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
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                />
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddTodo;
