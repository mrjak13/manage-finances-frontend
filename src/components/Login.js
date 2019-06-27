import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'
import { login }  from '../actions/currentUser'
import { test }  from '../actions/currentUser'

const Login = ({ loginFormData, updateLoginForm, login, test }) => {

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
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={loginFormData.email} onChange={handleInputChange} name="email" placeholder="email@email.com"/>
			<input type="text" value={loginFormData.password} onChange={handleInputChange} name="password" placeholder="password"/>
			<input type="submit" value="Log In"/>
		</form>
	)
}

const mapStateToProps = state => {
	return {
		loginFormData: state.loginForm

	}
}

export default connect(mapStateToProps, { updateLoginForm, login, test })(Login)