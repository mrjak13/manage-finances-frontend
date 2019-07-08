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

export const removeAccount = id => {
	console.log("in removeAccount action creator id", id)
	return	{
		type: "REMOVE_ACCOUNT",
		id
	}
}

export const createAccount = (userId, account) => {
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

export const deleteAccount = (id) => {
	console.log("in deleteAccount id:", id)
	return dispatch => {
		dispatch(removeAccount(id))
		return fetch(`http://localhost:3005/api/v1/accounts/${id}`, {
			credentials: "include",
			method: "DELETE",
			headers: {
				"Content-Type" : "application/json"
			}
		})
		.then(alert(`Account Destroyed`)
		)
	}
}