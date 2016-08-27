import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';
import Clock from './clock';

const tabs = [
  {name: "First", content: "My first tab"},
  {name: "Second", content: "Yes, my second tab"},
  {name: "Third", content: "Last one, everyone"}
];

const MyComponent = () => {
  return (
    <div>
      <Clock />
      <Tabs tabs={tabs} />
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<MyComponent />, document.getElementById('main'));
});
