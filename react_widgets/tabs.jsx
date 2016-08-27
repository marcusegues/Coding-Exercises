import React from 'react';

import Header from './header';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedIdx: 0};

    this.onTabChosen = this.onTabChosen.bind(this);
  }

  onTabChosen(index) {
    this.setState({selectedIdx: index});
  }

  render() {
    const { tabs } = this.props;
    const { selectedIdx } = this.state;

    return (
      <div className="tabs">
        <h1>Tabs</h1>
        <Header tabs={tabs} selectedIdx={selectedIdx} onTabChosen={this.onTabChosen}/>
        <article className="tab-content">
          {tabs[this.state.selectedIdx].content}
        </article>
      </div>
    );
  }
}
