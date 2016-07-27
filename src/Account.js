import React, {Component} from 'react';

class Account extends Component {
	constructor (props) {
		super(props)
		this.state = {}
	}
	componentDidMount () {
		fetch('https://api.github.com/repos/jackpanyj/learning-note/issues')
		.then(res => res.json())
		.then(val => {this.setState({
			val: val
		})})
	}
	render(){
		if (this.state.val) {
			const posts = this.state.val
			return (
				<div className="account">
					{ posts.map((val, index) => <li key={index}>{val.title}</li>)}
				</div>
			)
		} else {
			return (<h1> hello</h1>)
		}

	}
}

export default Account;
