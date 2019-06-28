export default (state = [], action) => {
	switch (action.type) {
		case "GET_ACCOUNTS":
			return action

		default:
			return state
	}
}