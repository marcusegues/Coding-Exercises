import { connect } from 'react-redux';
import { stepsById } from './../../reducers/selector';
import { createStep } from './../../actions/step_actions';
import StepList from './step_list';

const mapStateToProps = (state, ownProps) => {
  const steps = stepsById(state, ownProps.todo_id);
  return {
    steps: steps,
    todo_id: ownProps.todo_id
  };
};

const mapDispatchToProps = (dispatch) => ({
  createStep: (step) => dispatch(createStep(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);
