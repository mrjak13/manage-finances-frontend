import React from 'react'
import { connect } from 'react-redux'
import { setAccounts } from '../actions/accounts' 
import Account from '../components/Account'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'

class Accounts extends React.Component {

// does not update to new list of accounts after creating a new one
// need to adjust when to set accounts

	componentDidMount() {
		this.props.setAccounts(this.props.currentUser.attributes.accounts)
	}

	render() {
		return (
			<Container>
				<CardColumns>
					{ this.props.accounts.map(account => <Account id={account.id} name={account.name} balance={account.balance}/>) }
				</CardColumns>
			</Container>
		)
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser.data,
		accounts: state.accounts
	}
}

export default connect(mapStateToProps, { setAccounts })(Accounts)