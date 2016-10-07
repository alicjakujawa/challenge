import { POST } from '../constants/ActionTypes';

let posts = [];
let page = 0;

const initialState = {
  items: [],
  nextPage: false,
  prevPage: false,
  limit: 5,
};

function checkNext(pageNum, limit) {
  return posts.slice((pageNum + 1) * limit, (pageNum + 1) * limit + limit).length > 0;
}

export default function post(state = initialState, action) {
  const limit = state.limit;
  switch (action.type) {
    case POST.DATA_LOADED: {
      posts = action.posts;
      const cuttedPosts = action.posts.slice(0, page + limit);
      return {
        ...state,
        items: cuttedPosts,
        nextPage: checkNext(page, limit),
      };
    }
    case POST.ADDED: {
      posts.unshift(action.post);
      return {
        ...state,
        items: posts.slice(page * limit, page + limit),
      };
    }
    case POST.NEXT: {
      page++;
      return {
        ...state,
        items: posts.slice(page * limit, page * limit + limit),
        nextPage: checkNext(page, limit),
        prevPage: true,
      };
    }
    case POST.PREV: {
      page--;
      return {
        ...state,
        items: posts.slice(page * limit, page * limit + limit),
        nextPage: true,
        prevPage: page > 0,
      };
    }
    case POST.CHANGE_LIMIT: {
      const newlimit = action.limit;
      return {
        ...state,
        limit: newlimit,
        items: posts.slice(page * newlimit, page * newlimit + newlimit),
        nextPage: checkNext(page, newlimit),
        prevPage: page > 0,
      };
    }
    default:
      return state;
  }
}
