export default (state = [], action) => {
	console.log(action)
	switch (action.type) {
		case "SET_ACCOUNTS":
			return action.accounts
		case "ADD_ACCOUNT":
			return state.concat(action.account)
		default:
			return state
	}
}