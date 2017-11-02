import { combineReducers } from "redux";
import { FETCH_POSTS } from "../actions";

export default combineReducers({
  posts: postsReducer
});

function postsReducer(state = {}, action) {
  console.log("action.payload");
  console.log(action.payload);
  if (action.type === FETCH_POSTS) {
    var posts = action.payload.data.reduce(
      (postsObj, post) => (postsObj[post.id] = post),
      {}
    );
    console.log("REDUCER");
    console.log(posts);
    return action.payload.data.reduce(
      (postsObj, post) => (postsObj[post.id] = post),
      {}
    );
  }
  return state;
}
