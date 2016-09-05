import React from 'react';
import TodoDetailView from './todo_detail_view';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {detail: false};

    this.toggleDetail = this.toggleDetail.bind(this);
  }

  toggleDetail() {
    this.setState({detail: !this.state.detail});
  }

  render() {
    const { todo, toggleTodo } = this.props;
     return (
       <li>
         <span onClick={this.toggleDetail}>{todo.title}</span>
         <button onClick={toggleTodo(todo)}>
           {todo.done ? "Undo" : "Done"}
         </button>
         {this.state.detail ? <TodoDetailView todo={todo}/> : ""}
       </li>
     )
  }
}
