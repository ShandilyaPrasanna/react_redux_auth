import React from 'react';
import Timezone from './../../data/Timezone';
import map from 'lodash/map';

class SignupForm extends React.Component{
	constructor(props){
       super(props);
       this.state={
       	username:'',
       	Email:'',
       	Password:'',
       	Password_Confirmation:'',
       	Select_Timezones:''

       }
this.onChange=this.onChange.bind(this);
this.onSubmit=this.onSubmit.bind(this);

	}


onChange(e){
	this.setState({[e.target.name]:e.target.value});
}

onSubmit(e){
e.preventDefault();
console.log(this.state);
}

	render(){

		const timezones=map(Timezone,(val,key)=>
<option key={val} value={val}>{key}</option>
			);
		return(


<form>
<h1> Register Here ........</h1>


<div className="form-group">
 <label className="control-label">Username</label>
 <input 
 type="text" 
 value={this.state.username}
 name="username" 
 className="form-control"
 onChange={this.onChange}/>
 </div>

 <div className="form-group">
 <label className="control-label">Email</label>
 <input 
 type="text" 
 value={this.state.Email}
 name="Email" 
 className="form-control"
 onChange={this.onChange}/>
 </div>


<div className="form-group">
 <label className="control-label">Password</label>
 <input 
 value={this.state.Password}
 type="text" 
 name="Password" 
 className="form-control"
 onChange={this.onChange}/>
 </div>

<div className="form-group">
 <label className="control-label">Password Confirmation</label>
 <input 
 type="text" 
 value={this.state.Password_Confirmation}
 name="Password_Confirmation" 
 className="form-control"
 onChange={this.onChange}/>
 </div>

<div className="form-group">
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
 </div>


 <div className="form-group">
 <button className="btn btn-primary btn-lg" onClick={this.onSubmit}>SignUp</button>
 </div>

</form>
			);
	}
}

module.exports=SignupForm;