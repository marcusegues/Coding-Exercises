import React from 'react';
import ReactDOM from 'react-dom';
import { fetchTodos, myFun } from './util/todo_util_api';
import configureStore from './store/store';
import { allTodos } from './reducers/selector';
import { requestTodos, createTodo } from './actions/todo_actions';
import { Root } from './components/root';

const store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  let contentEl = document.getElementById("content");
  ReactDOM.render(<Root store={store}/>, contentEl)
});

window.store = store;
window.requestTodos = requestTodos;
window.createTodo = createTodo;
