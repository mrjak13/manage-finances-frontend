import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'
import Button from 'react-bootstrap/Button';

const Logout = ({ logout }) => {

	return (
		<Button variant="outline-danger" onClick={logout}>Log Out</Button>
	)
}

export default connect(null, { logout })(Logout)