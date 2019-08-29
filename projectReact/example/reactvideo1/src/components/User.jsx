import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div>
              <h1>User page</h1>  
              <h3>User Name : {this.props.username}</h3>
            </div>
        )
    }
}
