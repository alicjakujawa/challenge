import { POST } from '../constants/ActionTypes';

const initialState = {
  posts: [],
};

export default function post(state = initialState, action) {
  switch (action.type) {
    case POST.LOAD:
      return {
        ...state,
        posts: state.posts
      };
    default:
      return state;
  }
}
