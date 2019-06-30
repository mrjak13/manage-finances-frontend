import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

const Logout = ({ logout }) => {

	return (
		<ButtonToolbar>
			<Button variant="primary">Primary</Button>
			<Button variant="primary" onClick={logout}>Log Out</Button>
		</ButtonToolbar>
	)
}

export default connect(null, { logout })(Logout)