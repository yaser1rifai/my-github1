import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <div>
               <h1>Main page</h1> 
               <button onClick={()=>this.props.changname('YASER WALID  RIFAI ')}>chang name </button>
            </div>
        )
    }
}
