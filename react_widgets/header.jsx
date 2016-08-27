import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tabs, selectedIdx, onTabChosen } = this.props;
    let headers = tabs.map((tab, index) => {
      let klass = '';
      if (index === selectedIdx) {
        klass = 'active';
      }

      return(
        <span key={index} className={klass} onClick={onTabChosen.bind(null, index)}>
          {tab.name}
        </span>
      );
    });

    return (
      <div id="tab-header">
        {headers}
      </div>
    );
  }
}
