import React from 'react';
import StepForm from './step_form';
import StepListItemContainer from './step_list_item_container';

export default class StepList extends React.Component {

  render() {
    const { steps, createStep, todo_id } = this.props;
    return (
      <ul>
        {steps.map((step) => <StepListItemContainer key={step.id} step={step} />)}
        <StepForm createStep={createStep} todo_id={todo_id} />
      </ul>
    );
  }
};
