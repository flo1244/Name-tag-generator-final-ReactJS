import React, { Component } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput.js";

class App extends Component {
  state = {
    names: []
  };
  removeName = (clickedIndex) => {
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };
  addName = (name) => {
    const newNames = [name, ...this.state.names];
    this.setState({ names: newNames });
  };

  componentDidUpdate() {
    const savedNameString = JSON.stringify(this.state.names);
    localStorage.setItem("savedNames", savedNameString);
  }

  componentDidMount() {
    const savedNameString = localStorage.getItem("savedNames");
    if (savedNameString) {
      const savedNames = JSON.parse(savedNameString);
      this.setState({ names: savedNames });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        <UserInput addName={this.addName} />
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;
