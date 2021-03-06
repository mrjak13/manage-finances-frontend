import React from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import { updateSignupForm } from '../actions/signupForm'
import { signupUser } from '../actions/currentUser'

const Signup = ({ updateSignupForm, signupFormData, signupUser }) => {

	const handleInputChange = event => {
		const { name, value } = event.target
		const updatedFormInfo = {
			...signupFormData,
			[name]: value
		}
		updateSignupForm(updatedFormInfo)
	}

	const handleSubmit = event => {
		event.preventDefault()
		signupUser(signupFormData)
	}

	return(
		<Container>
			<br></br><h4>Sign up</h4><br></br>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="singupName">
				  <Form.Label>Name</Form.Label>
				  <Form.Control value={signupFormData.name} onChange={handleInputChange} name="name" placeholder="Your Name Here" />
				</Form.Group>
				<Form.Group controlId="singupEmail">
				  <Form.Label>Email address</Form.Label>
				  <Form.Control value={signupFormData.email} onChange={handleInputChange} name="email" placeholder="Enter email" />
				</Form.Group>
				<Form.Group controlId="signupPassword">
				  <Form.Label>Password</Form.Label>
				  <Form.Control value={signupFormData.password} onChange={handleInputChange} name="password" type="password" placeholder="Password" />
				</Form.Group>
				<Button variant="dark" type="submit">
				  Submit
				</Button>
			</Form>
		</Container>
	)
}

const mapStateToProps =  state => {
	return {
		signupFormData: state.signupForm
	}
}

export default connect(mapStateToProps, { updateSignupForm, signupUser })(Signup)