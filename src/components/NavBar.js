import React from 'react'
import { connect } from 'react-redux'
import Login from "./Login"
import Logout from "./Logout"
// import Accounts from "../containers/Accounts"

const NavBar = ({ currentUser }) => {

	return (
		<div>
			Welcome to managing your finances!
			
			{ currentUser.data ? < Logout /> : < Login/>}
		</div>
	)
}

const mapStateToProps = ({ currentUser }) => {
	return {
		currentUser
	}
}

export default connect(mapStateToProps)(NavBar)