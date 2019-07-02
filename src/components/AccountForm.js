import React from 'react'
import { connect } from 'react-redux'
import { updateAccountForm } from '../actions/accountForm'
import { createAccount } from '../actions/accounts'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

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
			balance: 0
		})
	}

	return(
		<Container>
			<br></br><h4>New Account</h4><br></br>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="accountFormName">
				  <Form.Label>Account Name</Form.Label>
				  <Form.Control onChange={handleInputChange} name="name" placeholder="Checking Account" />
				</Form.Group>

				<Form.Group controlId="accountFormBalance">
				  <Form.Label>Starting Balance</Form.Label>
				  <Form.Control type="number" step="0.01" onChange={handleInputChange} name="balance" placeholder="0.00" />
				</Form.Group>
				<Button variant="primary" type="submit">
				  Submit
				</Button>
			</Form>
		</Container>
	)
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		accountFormData: state.accountForm

	}
}

export default connect(mapStateToProps, { updateAccountForm, createAccount })(AccountForm)