import express from 'express';
let app=express();
app.get('/*',(req,res)=>{
	res.send("HELLO SIR");
});

app.listen(8080,()=>console.log('running on port 8080'));