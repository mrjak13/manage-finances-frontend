import React from 'react'

const Account = ({ id, name, balance }) => {
	return (
		<div>
			<h3>{ name }</h3>
			<p>Account id {id} Balance {balance}</p> 
		</div>
	)
}

export default Account