import React from 'react';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todo, toggleTodo, destroyTodo } = this.props;
     return (
       <li>
         {todo.title}
         <button onClick={toggleTodo(todo)}>
           {todo.done ? "Undo" : "Done"}
         </button>
         <button onClick={destroyTodo(todo)}>
           {"remove"}
         </button>
       </li>
     )
  }
}
