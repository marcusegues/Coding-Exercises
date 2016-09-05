import React from 'react';

export default class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ""};

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({title: e.target.value})
  }

  handleSubmit(e) {
    const { createStep, todo_id } = this.props;
    e.preventDefault();
    const newStep = {title: this.state.title, todo_id: todo_id ,done: false}
    this.setState({title: ""});
    createStep(newStep);
  }

  render() {
    return (
      <div>
      <div>Add Step</div>
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input type="text" onChange={this.handleInput} value={this.state.title} />
          </label>
          <input type="submit" value="Add Step" />
        </form>
      </div>
    );
  }
};
