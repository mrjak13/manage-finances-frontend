import React from 'react'
import { connect } from 'react-redux'
import { updateTransactionForm } from '../actions/transactionForm'
import { createAccount } from '../actions/accounts'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

const AccountForm = ({ updateTransactionForm, clearAccountForm, transactionFormData, currentUser }) => {

	const handleInputChange = event => {
		const { name, value } = event.target
		const updatedFormInfo = {
			...transactionFormData,
			[name]: value
		}
		updateTransactionForm(updatedFormInfo)
	}

	const handleSubmit = event => {
		event.preventDefault()
		// createTransaction(currentUser.id, transactionFormData)
		clearTransactionForm()
	}

	return(
		<Container>
			<br></br><h4>New Transaction</h4><br></br>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="transactionFormName">
				  <Form.Label>Name</Form.Label>
				  <Form.Control onChange={handleInputChange} name="name" placeholder="Direct Deposit" />
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlSelect1">
			    <Form.Label>Deposit or Withdrawl</Form.Label>
			    <Form.Control as="select" onChange={handleInputChange} name="action">
			      <option>Deposit</option>
			      <option>Withdrawl</option>
			    </Form.Control>
			  </Form.Group>
				<Form.Group controlId="transactionFormAmount">
				  <Form.Label>Amount</Form.Label>
				  <Form.Control type="number" step="0.01" onChange={handleInputChange} name="amount" placeholder="0.00" />
				</Form.Group>
				<Form.Group controlId="transactionFormDate">
				  <Form.Label>Date</Form.Label>
				  <Form.Control type="date" onChange={handleInputChange} name="date" placeholder="0.00" />
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
		transactionFormData: state.transactionForm

	}
}

export default connect(mapStateToProps, { updateTransactionForm, clearTransactionForm, creatTransaction })(AccountForm)