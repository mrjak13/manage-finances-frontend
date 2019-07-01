export default (state = [], action) => {
	switch (action.type) {
		
		case "SET_TRANSACTIONS":
			return action.transactions

		default:
			return state
	}
}