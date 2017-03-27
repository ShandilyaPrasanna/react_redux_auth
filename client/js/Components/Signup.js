import React from 'react';
import SignupForm from './SignupForm';
import {connect} from 'react-redux';
import {userSignupRequest} from './../actions/signupActions';

class Signup extends React.Component{
	render(){
		const {userSignupRequest}=this.props;
		return(
			<div className="container">
<div className="row">
 <div clasName="col-md-4 col-md-offset-4">
 <SignupForm userSignupRequest={userSignupRequest} />
 </div>
 </div>
 </div>
			);
	}
}

module.exports=Signup;