import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './components/widget';
import Emerging from './components/emerging';
import store from './store';

class View extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="view">
        <Widget store={this.props.store} />
        <Emerging store={this.props.store} />
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<View store={store} />, document.getElementById('root'));
});
