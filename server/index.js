import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';

import webpackConfig from '../webpack.config.js';
import users from './routes/users';


let app=express();

app.use(bodyParser.json());

app.use('/routes/users',users);

const compiler=webpack(webpackConfig);
app.use(webpackMiddleware(compiler));


app.get('/*',(req,res)=>{
	res.sendFile(path.join(__dirname,'./index.html'));
});

app.listen(8080,()=>console.log('running on port 8080'));