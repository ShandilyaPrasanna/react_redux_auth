import axios from 'axios';


export default function(state={},action){
	console.log("inside listener",action);
	switch(action.type){
		case "POST_REQUEST":
		return axios.post('/routes/users',action.payload);
		break;
}
return state;
}

