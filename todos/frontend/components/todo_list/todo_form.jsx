import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      title: "",
      body: "",
      done: false
    });
  }

  handleSubmit(){
    return (e) => {
      e.preventDefault();
      const todo = Object.assign({}, this.state);
      this.props.createTodo({todo});
      this.setState({title: "", body: ""});
    }
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value })
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit()}>
        <label>Title
          <input type="text"
                 value={this.state.title}
                 onChange={this.update('title')}/>
        </label>

        <label>Body
          <textarea cols="30" rows="10"
                    value={this.state.body}
                    onChange={this.update('body')} />
        </label>

        <input type="submit" />
      </form>
    )
  }
}
