import React, { Component } from "react";

class UserInput extends Component {
  state = {
    name: ""
  };
  updateName = (e) => {
    this.setState({ name: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ name: "" });
    this.props.addName(this.state.name);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {console.log(this.props)}
        {console.log(this.state)}
        <input
          className="new-name"
          type="text"
          placeholder="Add a new name here..."
          value={this.state.name}
          onChange={this.updateName}
        />
        <input className="create-name" type="submit" value="Create Name Tag" />
      </form>
    );
  }
}

export default UserInput;
