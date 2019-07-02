import React from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

const Signup = (props) => {

	return(
		<Container>
			<br></br><h4>Sign up</h4><br></br>
			<Form>
				<Form.Group controlId="singupName">
				  <Form.Label>Name</Form.Label>
				  <Form.Control placeholder="Your Name Here" />
				</Form.Group>
				<Form.Group controlId="singupEmail">
				  <Form.Label>Email address</Form.Label>
				  <Form.Control type="email" placeholder="Enter email" />
				  {/*<Form.Text className="text-muted">
				    We'll never share your email with anyone else.
				  </Form.Text>*/}
				</Form.Group>

				<Form.Group controlId="signupPassword">
				  <Form.Label>Password</Form.Label>
				  <Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Button variant="primary" type="submit">
				  Submit
				</Button>
			</Form>
		</Container>
	)
}

export default connect(null)(Signup)