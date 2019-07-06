import React from 'react'
import { connect } from 'react-redux'
import { fetchTransactions } from '../actions/transactions'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const Account = ({ id, name, balance, fetchTransactions }) => {
	return (
			<Card style={{ width: '18rem' }}>
			  <Card.Body>
			    <Card.Title>{ name }</Card.Title>
			    <Card.Subtitle className="mb-2 text-muted">Account id {id} Balance ${balance}</Card.Subtitle>
			    <Link to={"/transactions"} onClick={() => fetchTransactions(id)}>Get Transactions</Link>
			  </Card.Body>
			</Card>
	)
}

export default connect(null, { fetchTransactions })(Account)