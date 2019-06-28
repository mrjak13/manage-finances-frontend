import React from 'react'
import { connect } from 'react-redux'

class Accounts extends React.Component {

	handleClick = event => {
			console.log(this.props.currentUser)
	}

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Accounts</button>
			</div>
		)
	}
}

const mapStateToProps = ({ currentUser }) => {
	return {
		currentUser
	}
}

export default connect(mapStateToProps)(Accounts)