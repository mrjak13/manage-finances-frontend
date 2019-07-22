// Added for live coding session
import React from 'react'
import Container from 'react-bootstrap/Container'
import Comments from '../containers/Comments'

class NewForm extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			comment: "",
			comments: []
		}
	}

	handleSubmit = event => {
		event.preventDefault()
		this.setState({
			...this.state,
			comments: [...this.state.comments, this.state.comment]
		}, () => {this.resetForm()
		})
	}

	resetForm = () => {
		this.setState({
			...this.state,
			comment: ""
		})
	}

	handleChange = event => {
		this.setState({
		  [event.target.name]: event.target.value
		});
	}

	render(){
		return(
			<Container>
				<br></br><h4>New Form</h4><br></br>

				<form onSubmit={this.handleSubmit}>
					<label>Comment </label><br></br>
					<input onChange={event => this.handleChange(event)} type="text" name="comment" value={this.state.comment} />
					<input type="submit" value="Submit"/>
				</form>

				<Comments comments={this.state.comments} />

			</Container>
		)
	}
}

export default NewForm