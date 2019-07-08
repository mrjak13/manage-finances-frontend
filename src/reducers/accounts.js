export default (state = [], action) => {
	switch (action.type) {
		case "SET_ACCOUNTS":
			return action.accounts
		case "ADD_ACCOUNT":
			return state.concat(action.account)
		case "REMOVE_ACCOUNT":
			return state.filter(account => account.id !== action.id)
		default:
			return state
	}
}