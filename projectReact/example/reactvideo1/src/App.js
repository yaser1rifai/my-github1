import React, { Component } from 'react'
import User from './components/User'
import Main from './components/Main'
export default class App extends Component {
  constructor(){
    super();
    this.state={username:'YASER'}
  };
  changname(newname){this.setState({username:newname});}

  render() {
    return (
      <div>
        <Main changname={this.changname.bind(this)} />
        <User username={this.state.username}  />
      </div>
    )
  }
}
