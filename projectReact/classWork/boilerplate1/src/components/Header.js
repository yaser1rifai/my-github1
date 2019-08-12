import React from "react";
import HeaderCSS from  "./css/Header.css"
//React.createElement("div",{},createElement("h2"),{},"HEADER"))
class Header extends React.Component{
   render(){
       const dataArray=["Item1","Item2","Item3"]
       return(
       <nav className="navigation">
 <h2>
     HEADER
</h2>
<ul className="navigation-ul">
   <li>
       {dataArray[0]}
   </li> 
   <li>
   {dataArray[1]}
   </li> 
   <li>
   {dataArray[2]}
   </li> 
</ul>

       </nav>);
   }
}
export default Header