import React from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const AccountForm = (props) => {

	const handleSubmit = event => {
		event.preventDefault()
		alert("Submitted Account Form")
	}

	return(
		<Form onSubmit={handleSubmit}>
			<br></br><h4>New Account</h4><br></br>
			<Form.Group controlId="accountFormName">
			  <Form.Label>Account Name</Form.Label>
			  <Form.Control placeholder="Checking Account" />
			</Form.Group>

			<Form.Group controlId="accountFormBalance">
			  <Form.Label>Starting Balance</Form.Label>
			  <Form.Control type="number" placeholder="10000" />
			</Form.Group>
			<Button variant="primary" type="submit">
			  Submit
			</Button>
		</Form>
	)
}

export default connect(null)(AccountForm)