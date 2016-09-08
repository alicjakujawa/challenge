import { render } from 'react-dom';
import React from 'react';
import App from './containers/App';
import PostsData from './PostsData';

const containerEl = document.getElementById('container');
PostsData.init();

render(
  <App />,
  containerEl
);
