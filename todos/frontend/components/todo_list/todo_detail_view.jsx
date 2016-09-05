import React from 'react';
import StepListContainer from './../step_list/step_list_container'

export default class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todo } = this.props;
    return (
      <div>
        <StepListContainer todo_id={todo.id} />
      </div>
    );
  }
};
