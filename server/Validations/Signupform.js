
import Validator from 'validator';

import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){

let errors={};

if(Validator.isEmpty(data.username)){
errors.username="This Field is required";
}

if(Validator.isEmpty(data.Email)){
errors.Email="This Field is required";
}

if(!Validator.isEmail(data.Email)){
errors.Email="Invalid Email";
}

if(Validator.isEmpty(data.Password)){
errors.Password="This Field is required";
}
 
if(Validator.isEmpty(data.Password_Confirmation)){
errors.Password_Confirmation="This Field is required";
}

if(!Validator.equals(data.Password,data.Password_Confirmation)){
	errors.Password_Confirmation="Password is not same";
}
if(Validator.isEmpty(data.Select_Timezones)){
errors.Select_Timezones="This Field is required";
}


return{
	errors,
	isValid:isEmpty(errors)
}

}