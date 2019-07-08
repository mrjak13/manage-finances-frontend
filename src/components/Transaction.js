import React from 'react'
import { connect } from 'react-redux'
import { deleteTransaction } from '../actions/transactions'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Fade from 'react-reveal/Fade';


const Transaction = ({ id, name, amount, action, date, deleteTransaction }) => {
	return (
		<Fade>
			<Card style={{ width: '14rem' }}>
		    <Card.Header>
		    	<Row>
		    		<Col sm={9}>{ name }</Col>
					  <Col sm={3}><Link className="btn btn-outline-danger" onClick={() => deleteTransaction(id)} variant="outline-danger" size="sm">X</Link></Col>
					</Row>
		    </Card.Header>
			  <Card.Body>
			  	<Card.Title className={(action === "Withdrawl" ? "text-danger" : "")}>${amount}</Card.Title>
			    <Card.Subtitle className="mb-2 text-muted">Created on: {date}</Card.Subtitle>
			    <Card.Subtitle className="mb-2 text-muted">Transaction ID: {id}</Card.Subtitle>
			  </Card.Body>
			</Card>
		</Fade>
	)
}

export default connect(null, { deleteTransaction })(Transaction)