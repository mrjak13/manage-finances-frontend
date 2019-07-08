import React from 'react'
import Card from 'react-bootstrap/Card'
import Fade from 'react-reveal/Fade';


const Transaction = ({ id, name, amount, action, date }) => {
	return (
		
		<Fade>
			<Card style={{ width: '14rem' }}>
		    <Card.Header>{ name }</Card.Header>
			  <Card.Body>
			  	<Card.Title className={(action === "Withdrawl" ? "text-danger" : "")}>${amount}</Card.Title>
			    <Card.Subtitle className="mb-2 text-muted">Created on: {date}</Card.Subtitle>
			    <Card.Subtitle className="mb-2 text-muted">Transaction ID: {id}</Card.Subtitle>
			  </Card.Body>
			</Card>
		</Fade>
		
	)
}

export default Transaction