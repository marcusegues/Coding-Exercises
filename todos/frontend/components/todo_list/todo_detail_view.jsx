import React from 'react';

export default class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todo } = this.props;
    return (
      <div>
        {todo.body}
      </div>
    );
  }
};
