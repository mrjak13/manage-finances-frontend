export const setAccounts = accounts => {
	return {
		type: "SET_ACCOUNTS",
		accounts
	}
}

export const createAccount = (userId, account) => {
	console.log("in createAccount action, account:", account, " and userId: ", userId)
	return dispatch => {
		return fetch(`http://localhost:3005/api/v1/users/${userId}/accounts`, {
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type" : "application/json"
			}
		})
		.then(resp => resp.json())
		.then(console.log("AFTER POST REQUEST"))
	}
}