import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
import { destroyTodo } from './../../actions/todo_actions';
import { requestSteps } from './../../actions/step_actions';

const mapDispatchToProps = (dispatch) => ({
  destroyTodo: (todo) => dispatch(destroyTodo(todo)),
  requestSteps: (todo) => dispatch(requestSteps(todo))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoDetailView);
