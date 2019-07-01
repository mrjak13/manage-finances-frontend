const initialState = {
	name: "",
	balance: ""
}

export default (state = initialState, action) => {
	switch (action.type) {
			case "UPDATE_ACCOUNT_FORM":
				return action.formData
		default:
			return state
	}
}