import React from 'react'
import { connect } from 'react-redux'
import { fetchTransactions } from '../actions/transactions'
import Card from 'react-bootstrap/Card'

const Account = ({ id, name, balance, fetchTransactions }) => {
	return (
			<Card style={{ width: '18rem' }}>
			  <Card.Body>
			    <Card.Title>{ name }</Card.Title>
			    <Card.Subtitle className="mb-2 text-muted">Account id {id} Balance {balance}</Card.Subtitle>
			    {/*<Card.Text>
			      Some quick example text to build on the card title and make up the bulk of
			      the card's content.
			    </Card.Text>*/}
			    <Card.Link href="#" onClick={() => fetchTransactions(id)}>Get Transactions</Card.Link>
			  </Card.Body>
			</Card>
	)
}

export default connect(null, { fetchTransactions })(Account)