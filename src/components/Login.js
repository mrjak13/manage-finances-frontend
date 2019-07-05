import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'
import { login }  from '../actions/currentUser'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Login = ({ loginFormData, updateLoginForm, login}) => {

	const handleInputChange = event => {
		const { name, value } = event.target
		const updatedFormInfo = {
			...loginFormData,
			[name]: value
		}
		updateLoginForm(updatedFormInfo)
	}

	const handleSubmit = event => {
		event.preventDefault()
		login(loginFormData)
		updateLoginForm({
			email: "",
			password: ""
		})
	}

	return (
		<Form onSubmit={handleSubmit}>
		  <Form.Row>
		    <Col>
		      <Form.Control value={loginFormData.email} onChange={handleInputChange} name="email" placeholder="email@email.com" />
		    </Col>
		    <Col>
		      <Form.Control value={loginFormData.password} onChange={handleInputChange} name="password" placeholder="password" />
		    </Col>
			  <Button variant="outline-light" type="submit" value="Log In">Log In</Button>
		  </Form.Row>
		</Form>
	)
}

const mapStateToProps = state => {
	return {
		loginFormData: state.loginForm

	}
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)
		// <form onSubmit={handleSubmit}>
		// 	<input type="text" value={loginFormData.email} onChange={handleInputChange} name="email" placeholder="email@email.com"/>
		// 	<input type="text" value={loginFormData.password} onChange={handleInputChange} name="password" placeholder="password"/>
		// 	<Button type="submit" value="Log In">Log In</Button>
		// </form>