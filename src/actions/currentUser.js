import { setAccounts } from '../actions/accounts'
import { setTransactions } from '../actions/transactions'

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
 					dispatch(setCurrentUser(user.data))
 					dispatch(setAccounts(user.data.attributes.accounts))
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
			}
		})
			.then(res => res.json())
			.then(user => {
				if (user.error) {
					alert(user.error)
 				} else {
 					dispatch(setCurrentUser(user.data))
 					dispatch(setAccounts(user.data.attributes.accounts))
 				}
			})
			.catch()
	}
}

export const logout = () => {
	return dispatch => {	
		dispatch(setCurrentUser({}))
		return fetch("http://localhost:3005/api/v1/logout", {
			credentials: "include",
			method: "DELETE",
			headers: {
				"Content-Type" : "application/json"
			}
		})
		.then(resp => {
			dispatch(setAccounts([]))
			dispatch(setTransactions([]))
		})
	}
}

export const signupUser = user => {
	console.log("in signupUser user: ", user)
	const user_data = {
		user: {
			name: user.name,
			email: user.email,
			password: user.password
		}
	}
	return dispatch => {
		return fetch("http://localhost:3005/api/v1/users", {
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type" : "application/json"
			},
			body: JSON.stringify(user_data)
		})
		.then(resp => resp.json())
		.then(user => dispatch(setCurrentUser(user.data)))
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