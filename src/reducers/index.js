import { combineReducers } from "redux";
import { FETCH_POSTS } from "../actions";

export default combineReducers({
  posts: postsReducer
});

function postsReducer(state = {}, action) {
  if (action.type === FETCH_POSTS) {
    return action.payload.data.reduce(
      (postsObj, post) => (postsObj[post.id] = post),
      {}
    );
  }
  return state;
}
