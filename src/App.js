import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './containers/Main'
import Home from './containers/Home'
import Accounts from './containers/Accounts'
import AccountForm from './components/AccountForm'
import Transactions from './containers/Transactions'
import TransactionForm from './components/TransactionForm'
import Signup from './components/Signup'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <div>
        <Main />
        <br></br>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />

          <Route exact path='/accounts' render={() => (
            this.props.currentUser.id ? (
                <Accounts />
              ) : (
                <Home />
              )
          )}/>

          <Route exact path='/accounts/new' render={() => (
            this.props.currentUser.id ? (
                <AccountForm />
              ) : (
                <Home />
              )
          )}/>

          <Route exact path='/transactions' render={() => (
            this.props.currentUser.id ? (
                <Transactions />
              ) : (
                <Home />
              )
          )}/>

          <Route exact path='/transactions/new' render={() => (
            this.props.currentUser.id ? (
                <TransactionForm />
              ) : (
               <Home />
              )
          )}/>

          <Route exact path='/signup' render={() => (
            this.props.currentUser.id ? (
                <Home />
              ) : (
                <Signup />
              )
          )}/>
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

          // <Route path='/accounts/new' component={AccountForm} />
          // <Route exact path='/transactions' component={Transactions} />
          // <Route exact path='/transactions/new' component={TransactionForm} />
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
