import React from 'react'
import { connect } from 'react-redux'
import { setAccounts } from '../actions/accounts' 
import Account from '../components/Account'
import CardDeck from 'react-bootstrap/CardDeck'
import AccountForm from '../components/AccountForm'

class Accounts extends React.Component {


	componentDidMount() {
		this.props.setAccounts(this.props.currentUser.attributes.accounts)
	}

	render() {
		return (
			<div>
				<CardDeck>
					{ this.props.currentUser.attributes.accounts.map(account => <Account id={account.id} name={account.name} balance={account.balance}/>) }
				</CardDeck>

				<AccountForm />
			</div>
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