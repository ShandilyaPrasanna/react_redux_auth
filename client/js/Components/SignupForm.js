import React from 'react';
import Timezone from './../../data/Timezone';
import map from 'lodash/map';
import axios from 'axios';
import classnames from 'classnames';
import validateInput from './../../../server/Validations/Signupform';

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
axios.post('/routes/users',this.state).catch((error) => {
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


<form>
<h1> Register Here ........</h1>


<div className={classnames("form-group",{'has-error':error.username})}>
 <label className="control-label">Username</label>
 <input 
 type="text" 
 value={this.state.username}
 name="username" 
 className="form-control"
 onChange={this.onChange}/>
 {error.username && <span className="help-block">{error.username}</span>}
 </div>

 <div className={classnames("form-group",{'has-error':error.Email})}>
 <label className="control-label">Email</label>
 <input 
 type="text" 
 value={this.state.Email}
 name="Email" 
 className="form-control"
 onChange={this.onChange}/>
  { error.Email && <span className="help-block">{error.Email}</span> }
 </div>


<div className={classnames("form-group",{'has-error':error.Password})}>
 <label className="control-label">Password</label>
 <input 
 value={this.state.Password}
 type="text" 
 name="Password" 
 className="form-control"
 onChange={this.onChange}/>
  {error.Password && <span className="help-block">{error.Password}</span>}
 </div>

<div className={classnames("form-group",{'has-error':error.Password_Confirmation})}>
 <label className="control-label">Password Confirmation</label>
 <input 
 type="text" 
 value={this.state.Password_Confirmation}
 name="Password_Confirmation" 
 className="form-control"
 onChange={this.onChange}/>
  {error.Password_Confirmation && <span className="help-block">{error.Password_Confirmation}</span>}
 </div>

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

module.exports=SignupForm;