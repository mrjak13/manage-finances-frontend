import React from 'react'
import { connect } from 'react-redux'
import Account from '../components/Account'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'

class Accounts extends React.Component {

	render() {
		return (
			<Container>
				<h2>Accounts</h2>
				<br></br>
				<CardColumns>
					{ this.props.accounts.map(account => <Account id={account.id} name={account.name} balance={account.balance}/>) }
				</CardColumns>
			</Container>
		)
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		accounts: state.accounts
	}
}

export default connect(mapStateToProps)(Accounts)