import React from 'react'
import { connect } from 'react-redux'
import Login from "./Login"
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const SimpleNavBar = ({ currentUser }) => {

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
		  <Navbar.Brand>{ currentUser.id ? currentUser.attributes.name : "Manage Your Finances"}</Navbar.Brand>
		  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  <Navbar.Collapse id="responsive-navbar-nav">
		    <Nav className="mr-auto">
			    <Link className="nav-link" to="/" >Home</Link>
		    </Nav>
		    <Nav>
 		      <Link className="nav-link"to={"/signup"}>Sign up</Link>
		      < Login/>
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>
	)
}

const mapStateToProps = ({ currentUser }) => {
	return {
		currentUser
	}
}

export default connect(mapStateToProps)(SimpleNavBar)