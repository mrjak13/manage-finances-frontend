export const setCurrentUser = user => {
	return {
		type: "SET_CURRENT_USER",
		user
	}
}

export const login = credentials => {
	console.log("credentials are: ", credentials)

	return dispatch => {
		return fetch("http://localhost:3005/api/v1/login", {
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type" : "application/json"
			},
			body: JSON.stringify(credentials)
		})
			.then(res => res.json())
			.then(user => {
				if (user.error) {
					alert(user.error)
 				} else {
 					dispatch(setCurrentUser(user))
 				}
			})
			.catch()
	}
}

export const getCurrentUser = () => {
	return dispatch => {
		return fetch("http://localhost:3005/api/v1/get_current_user", {
			credentials: "include",
			method: "GET",
			headers: {
				"Content-Type" : "application/json"
			},
		})
			.then(res => res.json())
			.then(user => {
				if (user.error) {
					alert(user.error)
 				} else {
 					dispatch(setCurrentUser(user))
 				}
			})
			.catch()
	}
}

export const test = stuff => {
	console.log("credentials are: ", stuff)
	return dispatch => {
		return fetch("http://localhost:3005/api/v1/users")
		.then(res => res.json())
		.then(console.log)
	}
}