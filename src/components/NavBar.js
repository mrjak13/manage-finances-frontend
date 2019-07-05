import React from 'react'
import { connect } from 'react-redux'
import Login from "./Login"
import Logout from "./Logout"
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = ({ currentUser }) => {

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
		  <Navbar.Brand>{ currentUser.id ? currentUser.attributes.name : "Manage Your Finances"}</Navbar.Brand>
		  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  <Navbar.Collapse id="responsive-navbar-nav">
		    <Nav className="mr-auto">
			    <Link className="nav-link" to="/home" >Home</Link>
		      <NavDropdown title="Accounts" id="accounts-dropdown">
				    <Link className="dropdown-item" to={"/accounts"} >My Accounts</Link>
			      <Link className="dropdown-item" to={"/accounts/new"} >New Account</Link>
		      </NavDropdown>
		      <Link className="nav-link"to={"/transactions/new"}>New Transaction</Link>
		    </Nav>
		    <Nav>
		      { currentUser.id ? < Logout /> : < Login/> }
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