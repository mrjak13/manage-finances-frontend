import { clearAccountForm } from './accountForm'

export const setAccounts = accounts => {
	return {
		type: "SET_ACCOUNTS",
		accounts
	}
}

export const addAccount = account => {
	return {
		type: "ADD_ACCOUNT",
		account
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
			},
			body: JSON.stringify(account)
		})
		.then(resp => resp.json())
		.then(account => {
			if (account.errors) {
				alert(account.errors)
			} else {
				dispatch(addAccount(account))
				dispatch(clearAccountForm())
				alert(`Successfully created Account: ${account.name}`)
			}
		})
	}
}