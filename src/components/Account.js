import React from 'react'
import { connect } from 'react-redux'
import { fetchTransactions } from '../actions/transactions'

const Account = ({ id, name, balance, fetchTransactions }) => {
	return (
		<div onClick={() => fetchTransactions(id)}>
			<h3>{ name }</h3>
			<p>Account id {id} Balance {balance}</p> 
		</div>
	)
}

export default connect(null, { fetchTransactions })(Account)