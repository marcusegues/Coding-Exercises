import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

export default class TodoList extends React.Component {
  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const { toggleTodo, destroyTodo, todos } = this.props;
    const todosList = todos.map((todo, idx) =>
      <TodoListItem key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    />
    );

    return (
      <div>
        <ul>
          {todosList}
        </ul>
        <TodoForm createTodo={this.props.createTodo}/>
      </div>
    );
  }
}
