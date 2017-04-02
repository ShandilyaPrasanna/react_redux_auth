import React from 'react';
import Timezone from './../../data/Timezone';
import map from 'lodash/map';
import axios from 'axios';
import classnames from 'classnames';
import validateInput from './../../../server/Validations/Signupform';
import TextField from './common/TextField';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userSignupRequest} from './../actions/signupActions';

class SignupForm extends React.Component{
	constructor(props){
       super(props);
       this.state={
       	username:'',
       	Email:'',
       	Password:'',
       	Password_Confirmation:'',
       	Select_Timezones:'',
       	errors:{},
       	isLoading:false

       }
this.onChange=this.onChange.bind(this);
this.onSubmit=this.onSubmit.bind(this);

	}


onChange(e){
	this.setState({[e.target.name]:e.target.value});
}

isValid(){
const {errors,isValid}=validateInput(this.state);
	if(!isValid)
	{
		console.log("error");
		this.setState({errors});
	}
return isValid;
}

onSubmit(e){
e.preventDefault();
if(this.isValid())
{
this.setState({errors:{},isLoading:true});
this.props.userSignupRequest(this.state).then(()=>
{
console.log("SUCCESS");
hashHistory.push('/');
}).catch((error) => {
    console.log(error.message);
    console.log(error.response); // Only available if response was received from the server
  this.setState({errors:error.response.data});
 });
  this.setState({errors:{},isLoading:false});
}	
}

	render(){
		const error=this.state.errors;
		const timezones=map(Timezone,(val,key)=>
<option key={val} value={val}>{key}</option>
			);
		return(


<form onSubmit={this.onSubmit}>
<h1> Register Here ........</h1>

 <TextField 
 type="text"
 label="Username" 
 field="username" 
 value={this.state.username} 
 onChange={this.onChange} 
 error={error.username} />

 <TextField 
 type="Email"
 label="Email" 
 field="Email" 
 value={this.state.Email} 
 onChange={this.onChange} 
 error={error.Email} />

<TextField 
type="text"
label="Password" 
field="Password" 
value={this.state.Password} 
onChange={this.onChange} 
error={error.Password}/>

<TextField 
type="text"
label="Password_Confirmation" 
field="Password_Confirmation" 
value={this.state.Password_Confirmation} 
onChange={this.onChange} 
error={error.Password_Confirmation}/>


<div className={classnames("form-group",{'has-error':error.Select_Timezones})}>
 <label className="control-label">Timezone</label>
 <select
 type="text" 
 value={this.state.Select_Timezones}
 name="Select_Timezones" 
 className="form-control"
 onChange={this.onChange}
>
<option value="" disabled>Select Your Timezone</option>
{timezones}
</select>
 {error.Select_Timezones && <span className="help-block">{error.Select_Timezones}</span>}
 </div>


 <div className="form-group">
 <button disabled={this.state.isLoading} className="btn btn-primary btn-lg" onClick={this.onSubmit}>SignUp</button>
 </div>

</form>
			);
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({userSignupRequest:userSignupRequest},dispatch)
}

export default connect((state)=>{return{}},matchDispatchToProps)(SignupForm);