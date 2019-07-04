import React from 'react'
import { connect } from 'react-redux'
import { updateTransactionForm } from '../actions/transactionForm'
import { createTransaction } from '../actions/transactions'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

const AccountForm = ({ updateTransactionForm, transactionFormData, accounts, createTransaction }) => {

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
		createTransaction(event.target.children[1].childNodes[1].value, transactionFormData)
	}

	const accountsOptions = () => accounts.map(account => <option value={account.id}>{account.name}</option>)

	return(
		<Container>
			<br></br><h4>New Transaction</h4><br></br>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="transactionFormName">
				  <Form.Label>Name</Form.Label>
				  <Form.Control onChange={handleInputChange} name="name" placeholder="Direct Deposit" />
				</Form.Group>

				<Form.Group controlId="transactionFormAccount">
			    <Form.Label>Account</Form.Label>
			    <Form.Control as="select" name="account">
			      <option></option>
			    	{accountsOptions()}
			    </Form.Control>
			  </Form.Group>

				<Form.Group controlId="transactionFormDepositOrWithdrawl">
			    <Form.Label>Deposit or Withdrawl</Form.Label>
			    <Form.Control as="select" onChange={handleInputChange} name="action">
			      <option></option>
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
		accounts: state.currentUser.attributes.accounts,
		transactionFormData: state.transactionForm

	}
}

export default connect(mapStateToProps, { updateTransactionForm, createTransaction })(AccountForm)