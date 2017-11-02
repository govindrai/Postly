import { combineReducers } from "redux";

export default combineReducers({
  posts: postsReducer
});

function postsReducer(state, action) {
  return [{ 1: "Yo soy Gonzalo" }];
}
