import React from 'react'
import { connect } from 'react-redux'
import { setAccounts } from '../actions/accounts' 
import Account from '../components/Account'

class Accounts extends React.Component {

	handleClick = event => {
			this.props.setAccounts(this.props.currentUser.attributes.accounts)
	}

	componentDidMount() {
		this.props.setAccounts(this.props.currentUser.attributes.accounts)
	}

	render() {
		return (
			<div>

				{ this.props.currentUser.attributes.accounts.map(account => <Account id={account.id} name={account.name} balance={account.balance}/>) }
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