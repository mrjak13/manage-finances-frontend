import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Main from './containers/Main'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
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
          
          <Container>
            <Main />
          </Container >
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
