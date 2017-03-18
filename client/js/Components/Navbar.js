import React from 'react';
import {Link} from 'react-router';

class Navbar extends React.Component{
	render(){
		return(
<nav className="navbar navbar-default">
 <div className="container-fluid">
  <ul className="navbar-header">
   <li>
   <Link to="/" className="navbar-brand" href="#">PRASHAN</Link>
   </li>
   </ul>
   <div className="collapse navbar-collapse">
    
    <ul className="nav navbar-nav navbar-right">
     <li>
     <Link to="/Signup" >Sign Up</Link>
     </li>
    </ul>

  </div>
 </div>
  
  </nav>

			);
	}
}

module.exports=Navbar;