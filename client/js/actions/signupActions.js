
export function userSignupRequest(userData){
       console.log("POST REQUEST FROM USER",userData);	
		return {
			type:"POST_REQUEST",
			payload:userData
		};
	}
