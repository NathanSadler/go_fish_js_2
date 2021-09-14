import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LoginView extends React.Component {
  constructor() {
    super();

    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.value)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <form class="user-form" onSubmit={this.handleSubmit}>
        <label for="name">Your Name</label>
        <input type="text" id="name" value={this.state.value} onChange={this.handleChange} required></input>
        <input type="submit" id="submit" value="login"></input>  
      </form>)
  }
}

ReactDOM.render(<LoginView/>, document.getElementById('root'))