import { POST } from '../constants/ActionTypes';

let posts = [];
let page = 0;

const initialState = {
  items: [],
  nextPage: false,
  prevPage: false,
};

export default function post(state = initialState, action) {
  switch (action.type) {
    case POST.DATA_LOADED:
      posts = action.posts;
      const cuttedPosts = action.posts.slice(0, page + 2);
      return {
        ...state,
        items: cuttedPosts,
        nextPage: posts.slice((page + 1) * 2, page + 3).length > 0,
      };

    case POST.ADDED:
      posts.unshift(action.post);
      return {
        ...state,
        items: posts.slice(page * 2, page + 2),
      };

    case POST.NEXT:
      page++;
      return {
        items: posts.slice(page * 2, page * 2 + 2),
        nextPage: posts.slice((page + 1) * 2, (page + 1) * 2 + 2).length > 0,
        prevPage: true,
      };

    case POST.PREV:
      page--;
      return {
        items: posts.slice(page * 2, page * 2 + 2),
        nextPage: true,
        prevPage: page > 0,
      };

    default:
      return state;
  }
}
