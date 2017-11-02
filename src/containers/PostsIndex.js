import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchPosts } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class PostsIndex extends Component {
  componentDidMount() {
    this.setState({ posts: this.props.fetchPosts() });
  }

  render() {
    return <div>{JSON.stringify(this.props.posts, null, 4)}</div>;
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
