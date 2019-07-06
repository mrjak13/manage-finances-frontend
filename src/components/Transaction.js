import React from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'


const Transaction = ({ id, name, amount, action, date }) => {
	return (
			<Card style={{ width: '18rem' }}>
		    <Card.Header>{ name }</Card.Header>
			  <Card.Body>
			  	<Card.Title className={(action === "Withdrawl" ? "text-danger" : "")}>${amount}</Card.Title>
			    <Card.Subtitle className="mb-2 text-muted">Created on: {date}</Card.Subtitle>
			    <Card.Subtitle className="mb-2 text-muted">Transaction ID: {id}</Card.Subtitle>
			  </Card.Body>
			</Card>
	)
}

export default connect(null, {})(Transaction)