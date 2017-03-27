import axios from 'axios';

export function userSignupRequest(userData){
	return dispatch=>{
		return axios.post('/routes/users',userData);
	}
}