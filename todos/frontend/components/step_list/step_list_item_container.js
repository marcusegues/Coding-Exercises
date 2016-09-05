import { connect } from 'react-redux';
import { destroyStep, toggleStep } from './../../actions/step_actions';
import StepListItem from './step_list_item';

const mapStateToProps = (state, ownProps) => ({
  step: ownProps.step
});

const mapDispatchToProps = (dispatch) => ({
  destroyStep: (step) => () => dispatch(destroyStep(step)),
  toggleStep: (step) => () => dispatch(toggleStep(step))
});

export default connect(
  null,
  mapDispatchToProps
)(StepListItem);
