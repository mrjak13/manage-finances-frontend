
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import accounts from './reducers/accounts'
import transactions from './reducers/transactions'
import accountForm from './reducers/accountForm'
import signupForm from './reducers/signupForm'
import transactionForm from './reducers/transactionForm'

const reducer = combineReducers({
	currentUser,
	loginForm,
	accounts,
	transactions,
	accountForm,
	signupForm,
	transactionForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
	