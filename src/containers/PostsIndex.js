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
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {console.log(this.props.posts)}
          {console.log(Object.keys(this.props.posts))}
          {Object.keys(this.props.posts).map(id => {
            const post = this.props.posts[id];
            console.log(post);
            return <li key={id}>{post.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
