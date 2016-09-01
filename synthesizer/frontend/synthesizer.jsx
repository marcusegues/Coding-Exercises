import React from 'react';
import ReactDOM from 'react-dom';
import Note from './util/note';
import configureStore from './store/store';
import Root from './components/root';

var store = configureStore();

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});
