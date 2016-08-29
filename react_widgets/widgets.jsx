import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';
import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';

const tabs = [
  {name: "First", content: "My first tab"},
  {name: "Second", content: "Yes, my second tab"},
  {name: "Third", content: "Last one, everyone"}
];

const items = [
  'Jenny', 'Mullhouse', 'Humjam', 'Crostin', 'Juniper', 'Perdkren'
];

const MyComponent = () => {
  return (
    <div>
      <Clock />
      <Weather />
      <Tabs tabs={tabs} />
      <Autocomplete items={items} />
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<MyComponent />, document.getElementById('main'));
});
