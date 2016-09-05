import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Root } from './components/root';

import { stepsById } from './reducers/selector';
import { fetchSteps } from './util/step_api_util';

const store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  let contentEl = document.getElementById("content");
  ReactDOM.render(<Root store={store}/>, contentEl)
});

window.store = store;
window.fetchSteps = fetchSteps;
window.stepsById = stepsById
