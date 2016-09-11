import { POST } from '../constants/ActionTypes';

export default function post(state = [], action) {
  switch (action.type) {
    case POST.DATA_LOADED:
      return state.concat(action.posts);

    case POST.ADDED:
      return [...state, action.post];

    default:
      return state;
  }
}
