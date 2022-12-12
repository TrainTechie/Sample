import React from 'react';
import ReactDOM from 'react-dom/client';
import GetEx1 from './HTTP/GetEx1';
import GetHooksEx from './HTTP/GetHooksEx';
import PostForm from './HTTP/PostEx';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <PostForm/>
  </>
);

reportWebVitals();