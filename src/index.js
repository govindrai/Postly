import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return <div>Hello World</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
