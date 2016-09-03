import React from 'react';
import ReactDOM from 'react-dom';
import { fetchTodos, myFun } from './util/todo_util_api';
import configureStore from './store/store';
import { allTodos } from './reducers/selector';

document.addEventListener("DOMContentLoaded", () => {
  let contentEl = document.getElementById("content");
  ReactDOM.render(<h1>It worked</h1>, contentEl)
});

window.allTodos = allTodos;

window.store = configureStore();
