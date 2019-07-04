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
			.then(transactions => dispatch(setTransactions(transactions.data)))
	}
}

export const createTransaction = (accountId, transaction) => {
	console.log("in createtTransaction action, transaction:", transaction, " and accountId: ", accountId)
	return dispatch => {
		return fetch(`http://localhost:3005/api/v1/accounts/${accountId}/transactions`, {
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type" : "application/json"
			},
			body: JSON.stringify(transaction)
		})
		.then(resp => resp.json())
		.then(transaction => console.log(transaction.data))
		// .then(transaction => dispatch(addTransaction(transaction)))
	}
}