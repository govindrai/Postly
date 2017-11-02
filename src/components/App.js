import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostsIndex from "../containers/PostsIndex";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={PostsIndex} />
      </Router>
    );
  }
}
