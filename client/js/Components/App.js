import React from 'react';
import Navbar from './Navbar';

class App extends React.Component {
	render(){
		return(
			<div className="container">
			<Navbar />
			{this.props.children}
			</div>

			);
	}
	}



module.exports=App;