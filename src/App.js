import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Main from './containers/Main'
import Accounts from './containers/Accounts'
import AccountForm from './components/AccountForm'
import Signup from './components/Signup'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import { Route, Switch, withRouter, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <div>
        <NavBar />

          <br></br>

          <Switch>
            <Route exact path='/accounts' component={Accounts} />
            <Route exact path='/accounts/new' component={AccountForm} />
            <Route exact path='/signup' component={Signup} />
          </Switch>
 
          

      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
}

export default connect(mapStateToProps, { getCurrentUser })(App)
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
