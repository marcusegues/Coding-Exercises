import React from 'react';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
     return (
       <li>{item.title}</li>
     )
  }
}
