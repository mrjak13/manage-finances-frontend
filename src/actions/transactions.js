export const setTransactions = transactions => {
	return {
		type: "SET_TRANSACTIONS",
		transactions
	}
}

export const fetchTransactions = accountId => {
	console.log(accountId)
	return dispatch => {
		return fetch(`http://localhost:3005/api/v1/accounts/${accountId}/transactions`, {
			credentials: "include",
			method: "GET",
			headers: {
				"Content-Type" : "application/json"
			}
		})
			.then(resp => resp.json())
			.then(transactions => dispatch(setTransactions(transactions)))
	}
}