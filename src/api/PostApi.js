import axios from 'axios';

export default {
  getPosts() {
    return axios.get('http://localhost:3004/posts');
  },

  addPost(post) {
    return axios.post('http://localhost:3004/posts', post);
  },
};
