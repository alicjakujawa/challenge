import _posts from './posts.json';

const TIMEOUT = 100;

export default {
  getPosts(callback, timeout) {
    setTimeout(() => callback(_posts), timeout || TIMEOUT);
  },
};
