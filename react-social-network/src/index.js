import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './redux/state';
import reportWebVitals from './reportWebVitals';
import App from './App';

window.store = store;

const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={ state }
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};


renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
