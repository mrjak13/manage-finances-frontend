export default (state = [], action) => {
	switch (action.type) {
		
		case "GET_TRANSACTIONS":
			return action.transactions

		default:
			return state
	}
}