import express from 'express';
import Validator from 'validator';

import isEmpty from 'lodash/isEmpty';

let router=express.Router();

function validateInput(data){

let errors={};

if(Validator.isEmpty(data.username)){
errors.username="This Field is required";
}

if(Validator.isEmpty(data.Email)){
errors.Email="This Field is required";
}

if(Validator.isEmail(data.Email)){
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

router.post('/',(req,res)=>{
	console.log(req.body);
	const {errors,isValid}=validateInput(req.body);
	if(!isValid)
	{
		console.log("error");
		res.status(400).json(errors);
	}
})

module.exports=router;