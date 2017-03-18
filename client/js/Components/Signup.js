import React from 'react';
import SignupForm from './SignupForm';

class Signup extends React.Component{
	render(){
		return(
			<div className="container">
<div className="row">
 <div clasName="col-md-4 col-md-offset-4">
 <SignupForm />
 </div>
 </div>
 </div>
			);
	}
}

module.exports=Signup;