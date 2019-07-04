const initialState = {
	name: "",
	amount: 0,
	action: "",
	date: ""
}

export default (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_TRANSACTION_FORM":
			return action.formData
		case "CLEAR_TRANSACTION_FORM":
			return initialState
		default:
			return state
	}
}