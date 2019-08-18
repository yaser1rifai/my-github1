import React, { Component } from 'react';
import   "./App.css";

import Home from './Components/Home';
import Showpost from './Components/Showpost';
import Createpost from './Components/Createpost';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function App (){
  
    return (
  <Router>

    <main>
        <nav>
          <li><Link to="/"> Home               </Link> </li>
         <li><Link to="/Createpost"> Create A Post      </Link> </li>
          <li><Link to="/Showpost"> Show Current Posts </Link> </li>
          
        </nav>

      <Switch>
       <Route exact path="/" component={Home} />
      <Route path="/Createpost" component={Createpost} /> 
       <Route path="/Showpost" component={Showpost} /> 
      </Switch>
    </main>
  </Router>

    );
  }


export default App;
