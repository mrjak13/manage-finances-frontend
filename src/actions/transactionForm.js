export const updateTransactionForm = formData => {
	return {
		type: "UPDATE_TRANSACTION_FORM",
		formData
	}
}

export const clearTransactionForm = () => {
	return {
		type: "CLEAR_TRANSACTION_FORM"
	}
}