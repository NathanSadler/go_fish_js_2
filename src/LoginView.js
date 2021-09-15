import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

class LoginView extends React.Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.value)
    this.props.onLogin(this.state.value)
    // ReactDOM.render(<p>{this.state.value}</p>, document.getElementById('root'))
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <form className="user-form" onSubmit={(e) => this.handleSubmit(e)}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" value={this.state.value} onChange={this.handleChange} required></input>
        <input type="submit" id="submit" value="Login"></input>  
      </form>)
  }
}




export default LoginView