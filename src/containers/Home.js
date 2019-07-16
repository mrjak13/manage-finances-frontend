import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import NewForm from '../components/NewForm'


const Home = (props) => {
	return (
		<Jumbotron fluid>
		  <Container className="text-center">
		  	<h5>Welcome to</h5>
		    <h1>Managing your Finances</h1>
		    <p>
		      Here you can easily track your expenses and monitor your savings accross multiple accounts.
		    </p>
		  </Container>
		  <NewForm />
		</Jumbotron>
	)
}

export default Home