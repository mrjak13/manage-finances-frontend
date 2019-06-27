export const setCurrentUser = user => {
	return {
		type: "SET_CURRENT_USER",
		user
	}
}

export const login = credentials => {
	console.log("credentails are: ", credentials)
	return dispatch => {
		return fetch("http://localhost:3005/api/v1/login", {
			method: "POST",
			header: {
				"Content-Type" : "application/json"
			},
			body: JSON.stringify()
		})
	}
}

export const test = stuff => {
	console.log("credentails are: ", stuff)
	return dispatch => {
		return fetch("http://localhost:3005/api/v1/users")
		.then(res => res.json())
		.then(console.log)
	}
}