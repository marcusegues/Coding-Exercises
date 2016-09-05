import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
import { destroyTodo } from './../../actions/todo_actions';

const mapDispatchToProps = (dispatch) => ({
  destroyTodo: (todo) => dispatch(destroyTodo(todo));
});

export default connect(
  null,
  mapDispatchToProps
)(TodoDetailView);
