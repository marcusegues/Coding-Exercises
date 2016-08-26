import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = { result: 0, input1: "", input2: "" };
    this.setInput1 = this.setInput1.bind(this);
    this.setInput2 = this.setInput2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }

  setInput1(e) {
    this.setState({input1: e.currentTarget.value});
  }

  setInput2(e) {
    this.setState({input2: e.currentTarget.value});
  }

  add(e) {
    e.preventDefault();
    this.setState({result: parseInt(this.state.input1) + parseInt(this.state.input2)});
  }

  subtract(e) {
    e.preventDefault();
    this.setState({result: parseInt(this.state.input1) - parseInt(this.state.input2)});
  }

  multiply(e) {
    e.preventDefault();
    this.setState({result: parseInt(this.state.input1) * parseInt(this.state.input2)});
  }

  divide(e) {
    e.preventDefault();
    this.setState({result: parseInt(this.state.input1) / parseInt(this.state.input2)});
  }

  clearInputs() {
    this.setState({ result: 0, input1: "", input2: "" });
  }

  render(){
    var {result, input1, input2} = this.state;
    return (
      <div>
        <h1>{result}</h1>
        <input onChange={this.setInput1} value={input1} />
        <input onChange={this.setInput2} value={input2} />
        <button onClick={this.clearInputs}>Clear</button>
        <br />
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
      </div>
    );
  }
}

export default Calculator;

// const Calculator = React.createClass({
//   getInitialState() {
//     return { result: 0, input1: "", input2: ""};
//   },
//
//   setInput1(e) {
//     this.setState({input1: e.currentTarget.value});
//   },
//
//   setInput2(e) {
//     this.setState({input2: e.currentTarget.value});
//   },
//
//   add(e) {
//     debugger;
//     e.preventDefault();
//     debugger;
//     this.setState({result: parseInt(this.state.input1) + parseInt(this.state.input2)})
//   },
//
//   render(){
//     return (
//       <div>
//         <h1>{this.state.result}</h1>
//         <input onChange={this.setInput1} value={this.state.input1} />
//         <input onChange={this.setInput2} value={this.state.input2} />
//         <br />
//         <button onClick={this.add}>+</button>
//       </div>
//     );
//   }
//
// })
