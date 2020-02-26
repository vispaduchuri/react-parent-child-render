import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      count:0
    };
  }

   parentAdd(){
    this.setState(prevState=>({count : prevState.count +1}))
  }

  parentMinus(){
    const {count}=this.state
    this.setState({count : count -1})
  }

  componentDidUpdate(){
    console.log('will be called on parent state change')
  }

  render() {
    console.log('parent render')
    return (
      <div>
    <button onClick={(e)=> this.parentAdd(e)}>PARENT + BUTTON</button>
    {this.state.count}
    <button onClick={(e)=> this.parentMinus(e)}>PARENT - BUTTON</button>

    <Hello name={this.state.name} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
