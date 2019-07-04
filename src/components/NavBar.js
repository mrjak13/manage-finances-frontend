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
			    <Link className="nav-link" to="/" >Home</Link>
			    <Link className="nav-link" to={"/accounts"} >My Accounts</Link>
		      <Link className="nav-link" to={"/accounts/new"} >New Account</Link>
		      <Link className="nav-link"to={"/transactions/new"}>New Transaction</Link>
 		      <Link className="nav-link"to={"/signup"}>Sign up</Link>
		      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
		        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
		      </NavDropdown>
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