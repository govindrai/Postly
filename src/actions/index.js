import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";

export function fetchPosts() {
  const request = axios.get(
    "https://reduxblog.herokuapp.com/api/posts?key=govind"
  );

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
