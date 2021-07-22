import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, message: 'fewe', likesCount: 11},
  { id: 1, message: 'fewe', likesCount: 11},
  { id: 1, message: 'fewe', likesCount: 11},
]

let dialogsData = [
  { id: 1, name: 'Andrew'},
  { id: 2, name: 'Dick'},
  { id: 3, name: 'John'},
  { id: 4, name: 'Jason'},
]

let messagesData = [
  { id: 1, message: 'fewe'},
  { id: 2, message: 'fewe'},
  { id: 3, message: 'fewe'},
  { id: 4, message: 'fewe'},
]

ReactDOM.render(
  <React.StrictMode>
    <App postsData = { postsData } messagesData = { messagesData } dialogsData = { dialogsData } />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
