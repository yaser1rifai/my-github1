import React, { Component } from 'react'
import './Createpost.css'
export default class Showpost extends Component {
    render() {
        return (
            <div>
            <form >
             
           
             <input type="text" id="fname" name="firstname"  value='Good morning Developers !'/>
           
             
              <input type="text" id="lname" name="lastname" value='Read the fulll article'/>
              
             
              <input type="text" id="Content" name="Content" value='DCI wrote at :24/7/2019 10:48'/>
          
            
             
            </form>
            </div>
        )
    }
}
