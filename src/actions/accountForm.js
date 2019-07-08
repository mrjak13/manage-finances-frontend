export const updateAccountForm = formData => {
	return {
		type: "UPDATE_ACCOUNT_FORM",
		formData
	}
}

export const clearAccountForm = () => {
	return {
		type: "CLEAR_ACCOUNT_FORM"
	}
}