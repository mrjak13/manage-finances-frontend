import React from 'react'
import { connect } from 'react-redux'
import SimpleNavBar from '../components/SimpleNavBar'
import NavBar from '../components/NavBar'

const Main = ({ currentUser }) => {
	return (
		<div>
			{ currentUser.id ? <NavBar /> : <SimpleNavBar /> }
		</div>
	)
}

const mapStateToProps = ({ currentUser }) => {
	return {
		currentUser
	}
}

export default connect(mapStateToProps)(Main)