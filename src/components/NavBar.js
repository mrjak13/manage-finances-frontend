import React from 'react'
import { connect } from 'react-redux'
import Login from "./Login"
import Logout from "./Logout"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = ({ currentUser }) => {

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
		  <Navbar.Brand href="#home">{ currentUser.data ? currentUser.data.attributes.name : "Manage Your Finances"}</Navbar.Brand>
		  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  <Navbar.Collapse id="responsive-navbar-nav">
		    <Nav className="mr-auto">
		      <Nav.Link href="#features">Features</Nav.Link>
		      <Nav.Link href="#pricing">Pricing</Nav.Link>
		      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
		        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
		      </NavDropdown>
		    </Nav>
		    <Nav>
		      { currentUser.data ? < Logout /> : < Login/> }
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

export default connect(mapStateToProps)(NavBar)