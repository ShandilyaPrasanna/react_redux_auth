import express from 'express';
import validateInput from './../Validations/Signupform'

let router=express.Router();



router.post('/',(req,res)=>{
	console.log(req.body);
	const {errors,isValid}=validateInput(req.body);
	console.log("Server Side Validation done");
	if(isValid){
res.json({success:true});
	}
	else
	{
		console.log("error");
		res.status(400).json(errors);
	}
})

module.exports=router;