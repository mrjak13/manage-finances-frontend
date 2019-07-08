import { getCurrentUser } from './currentUser'
import { clearTransactionForm } from './transactionForm'

export const setTransactions = transactions => {
	return {
		type: "SET_TRANSACTIONS",
		transactions
	}
}

export const removeTransaction = id => {
	return {
		type: "REMOVE_TRANSACTION",
		id
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
		.then(transaction => {
			if (transaction.errors) {
				alert(transaction.errors)
			} else {
				dispatch(getCurrentUser())
				dispatch(clearTransactionForm())
				alert(`Successfully created: ${transaction.data.attributes.name}`)
			}
		})
	}
}

export const deleteTransaction = (id) => {
	return dispatch => {
		fetch(`http://localhost:3005/api/v1/transactions/${id}`, {
			credentials: "include",
			method: "DELETE",
			headers: {
				"Content-Type" : "application/json"
			}
		})
		.then(resp => resp.json())
		.then(user => {
			dispatch(removeTransaction(id))
			dispatch(getCurrentUser(user.data))
			alert("Transaction Destroyed")
		})
	}
}