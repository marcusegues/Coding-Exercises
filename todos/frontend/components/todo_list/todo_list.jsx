import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

export default class TodoList extends React.Component {
  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const todos = this.props.todos.map((todo, idx) => <TodoListItem key={todo.id} item={todo} />);

    return (
      <div>
        <ul>
          {todos}
        </ul>
        <TodoForm createTodo={this.props.createTodo}/>
      </div>
    );
  }
}
