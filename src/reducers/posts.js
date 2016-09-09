import { POST } from '../constants/ActionTypes';

const initialState = {
  posts: [],
};

export default function post(state = initialState, action) {
  switch (action.type) {
    case POST.DATA_LOADED:
      return {
        ...state,
        posts: action.posts,
      };

    case POST.POST_ADDED:
      return {
        ...state,
        test: 'sucess',
      };
    default:
      return state;
  }
}
