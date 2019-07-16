import React from 'react'
import Comment from '../components/Comment'

const Comments = props => {
	return(
		<div>
			{props.comments.map((comment => <Comment text={comment}/>))}
		</div>
	)
}

export default Comments