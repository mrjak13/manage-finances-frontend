import React from 'react'
import { connect } from 'react-redux'
import Accounts from './Accounts'

const Main = ({ currentUser }) => {
	return (
		<div>
			{ currentUser.data ? <Accounts /> : "" }
		</div>
	)
}

const mapStateToProps = ({ currentUser }) => {
	return {
		currentUser
	}
}

export default connect(mapStateToProps)(Main)