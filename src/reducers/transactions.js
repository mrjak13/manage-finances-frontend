export default (state = [], action) => {
	switch (action.type) {
		case "SET_TRANSACTIONS":
			return action.transactions
		case "REMOVE_TRANSACTION":
			return state.filter(account => account.id !== action.id)
		default:
			return state
	}
}