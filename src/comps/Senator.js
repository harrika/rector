import React from 'react'


export class Senator extends React.Component {
constructor(props) {
	super(props)
	this.state = {
		 count: 0
	}
}
adding(){
	this.setState(prevState => ({
		count: prevState.count+1
	}))		
}

	render() {
		return (
			<div>
				<h2>hullo senator {this.state.count}</h2>
				<button onClick={()=>this.adding()}>add some more</button>
			</div>
		)
	}
}

export default Senator