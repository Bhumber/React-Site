import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './Components/Redux/State';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, subscribe} from './Components/Redux/State.js';

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </React.StrictMode>
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

reportWebVitals();
