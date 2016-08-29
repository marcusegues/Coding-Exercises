import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userInput: ''};

    this.onUserInput = this.onUserInput.bind(this);
    this.onUserInputClick = this.onUserInputClick.bind(this);
  }

  onUserInput(e) {
    this.setState({userInput: e.currentTarget.value});
  }

  onUserInputClick(e) {
    const value = e.target.textContent;
    document.querySelector('#userInput').value = value;
    this.setState({userInput: value});
  }

  render() {
    const { items } = this.props;
    const { userInput } = this.state;
    var list = [];
    items.forEach((item, idx) => {
      if (item.startsWith(userInput)) {
        list.push(<li onClick={this.onUserInputClick} key={idx}>{item}</li>);
      }
    });

    return (
      <div>
        <h1>Autocomplete</h1>
        <div className="autocomplete">
          <input id="userInput" onChange={this.onUserInput} placeholder="Search..."/>
          <ul>
            <ReactCSSTransitionGroup transitionName='auto'
                                     transitionEnterTimeout={500}
                                     transitionLeaveTimeout={500}>
              {list}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    );
  }
}
