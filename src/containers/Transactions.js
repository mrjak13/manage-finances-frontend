import React from 'react'
import { connect } from 'react-redux'
import Transaction from '../components/Transaction'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'

class Transactions extends React.Component {

	renderTransactions = () => {
		return this.props.transactions.map(transaction => {
			return <Transaction id={transaction.id} name={transaction.attributes.name} amount={transaction.attributes.amount} action={transaction.attributes.action} date={transaction.attributes.date}/>
		})
	}
	
	render(){
		return (
			<Container>
				<h2>Transactions</h2>
				<br></br>
				<CardColumns>
					{this.renderTransactions()}
				</CardColumns>
			</Container>
		)
	}
}

const mapStateToProps = state => {
	return {
		transactions: state.transactions
	}
}

export default connect(mapStateToProps)(Transactions)