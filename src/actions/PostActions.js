import { POST } from '../constants/ActionTypes';
import PostApi from '../api/PostApi';

export function postAdded(post) {
  return {
    type: POST.ADDED,
    post,
  };
}

export function receivePosts(data) {
  return {
    posts: data,
    type: POST.DATA_LOADED,
  };
}

export function next() {
  return {
    type: POST.NEXT,
  };
}

export function prev() {
  return {
    type: POST.PREV,
  };
}

export function load() {
  return dispatch => {
    PostApi.getPosts()
      .then((response) => {
        dispatch(receivePosts(response.data));
      });
  };
}

export function addPost(post) {
  return dispatch => {
    PostApi.addPost(post)
      .then(() => {
        dispatch(postAdded(post));
      });
  };
}
