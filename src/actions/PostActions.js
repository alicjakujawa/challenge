import { POST } from '../constants/ActionTypes';
import PostApi from '../api/PostApi';

export function postAdded() {
  return {
    type: POST.ADDED,
  };
}

export function receivePosts(data) {
  return {
    posts: data,
    type: POST.DATA_LOADED,
  };
}

export function load() {
  return dispatch => {
    PostApi.getPosts(posts => {
      dispatch(receivePosts(posts));
    });
  };
}

export function addPost(post) {
  return dispatch => {
    console.log(post);
    dispatch(postAdded());
  };
}
