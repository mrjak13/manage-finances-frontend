import React from 'react'
import { connect } from 'react-redux'
import { deleteAccount } from '../actions/accounts'
import { fetchTransactions } from '../actions/transactions'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Fade from 'react-reveal/Fade';

const Account = ({ id, name, balance, fetchTransactions, deleteAccount }) => {
	return (
		<Fade>
			<Card style={{ width: '15rem' }}>
			  <Card.Body>
		  		<Card.Title>
				  	<Row>
				  		<Col sm={9}>{ name }</Col>
				  		<Col sm={3}><Link className="btn btn-outline-danger" onClick={() => deleteAccount(id)} variant="outline-danger" size="sm">X</Link></Col>
				   	</Row>
		  		</Card.Title>
			    <Card.Subtitle className="mb-2 text-muted">Balance ${balance}</Card.Subtitle>
			    <Link to={"/transactions"} onClick={() => fetchTransactions(id)}>Get Transactions</Link>
			  </Card.Body>
			</Card>
		</Fade>
	)
}

export default connect(null, { fetchTransactions, deleteAccount })(Account)