import { POST } from '../constants/ActionTypes';
import PostApi from '../api/PostApi';

export function add() {
  return {
    type: POST.ADD,
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
