import React, { Component } from 'react'
import './Createpost.css'

export default class Createpost extends Component {
    render() {
        return (
            <div>
            <form >
             
            <label for="Fname">Usernmae</label>
             <input type="text" id="fname" name="firstname" />
         
              <label for="lname">Title</label>
              <input type="text" id="lname" name="lastname" />
              
              <label for="Content">Content</label>
              <input type="text" id="Content" name="Content" />
          
            
              <input type="submit" value="Create a post"  />
            </form>
            </div>
        )
    }
}
