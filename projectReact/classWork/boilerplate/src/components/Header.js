import React from 'react';
import HeaderCSS from "./css/Header.css";
 class Header extends React.Component {
    render() {
        
           
            const dataArray=["item1","item2","item3"] 
            return(
<nav className="navigation">
<h2>Header</h2>
<ul className="navigation-ul">
<li>{dataArray[0]}</li>
<li>{dataArray[1]}</li>
<li>{dataArray[2]}</li>
</ul>
</nav>
            );
            
        
    }
}
export default Header;