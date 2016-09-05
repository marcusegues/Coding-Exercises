import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Root } from './components/root';
import { requestSteps, createStep, updateStep, destroyStep } from './actions/step_actions';

const store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  let contentEl = document.getElementById("content");
  ReactDOM.render(<Root store={store}/>, contentEl)
});

window.store = store;
window.requestSteps = requestSteps;
window.createStep = createStep;
window.updateStep = updateStep;
window.destroyStep = destroyStep;
