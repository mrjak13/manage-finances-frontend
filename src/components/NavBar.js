import React from 'react'
import { connect } from 'react-redux'
import Login from "./Login"
import Logout from "./Logout"
import Accounts from "../containers/Accounts"

const NavBar = ({ currentUser }) => {

	return (
		<div>
			{currentUser ? `Welcome ${currentUser.name}` : ""}
			{currentUser ? < Logout /> : < Login/>}
			<Accounts />
		</div>
	)
}

const mapStateToProps = ({ currentUser }) => {
	return {
		currentUser
	}
}

export default connect(mapStateToProps)(NavBar)