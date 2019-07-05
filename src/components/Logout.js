import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'
import { Link } from 'react-router-dom'

const Logout = ({ logout }) => {

	return (
		<Link className="btn btn-outline-danger" to={"/home"} onClick={logout}>Log Out</Link>
	)
}

export default connect(null, { logout })(Logout)