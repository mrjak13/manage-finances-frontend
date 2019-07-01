import React from 'react'
import { connect } from 'react-redux'
import { updateAccountForm } from '../actions/accountForm'
import { createAccount } from '../actions/accounts'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const AccountForm = ({ updateAccountForm, accountFormData, createAccount, currentUser }) => {

	const handleInputChange = event => {
		const { name, value } = event.target
		const updatedFormInfo = {
			...accountFormData,
			[name]: value
		}
		updateAccountForm(updatedFormInfo)
	}

	const handleSubmit = event => {
		event.preventDefault()
		createAccount(currentUser.data.id, accountFormData)
		updateAccountForm({
			name: "",
			balance: ""
		})
	}

	return(
		<Form onSubmit={handleSubmit}>
			<br></br><h4>New Account</h4><br></br>
			<Form.Group controlId="accountFormName">
			  <Form.Label>Account Name</Form.Label>
			  <Form.Control onChange={handleInputChange} name="name" placeholder="Checking Account" />
			</Form.Group>

			<Form.Group controlId="accountFormBalance">
			  <Form.Label>Starting Balance</Form.Label>
			  <Form.Control type="number" step="0.01" onChange={handleInputChange} name="balance" placeholder="10000" />
			</Form.Group>
			<Button variant="primary" type="submit">
			  Submit
			</Button>
		</Form>
	)
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		accountFormData: state.accountForm

	}
}

export default connect(mapStateToProps, { updateAccountForm, createAccount })(AccountForm)