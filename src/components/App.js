import React from 'react';
import {Link} from 'react-router-dom';


class App extends React.Component {

	renderhome(){
		return <div>HI - {this.props.test}</div>
	}
	render() {
		return (
			<div className="component">
					<div>{this.renderhome()}</div>
					<br />
					<div>
						<Link to="/streams/create">create Streams</Link>
						<br />
						<Link to="/streams/delete">Delete Streams</Link>
						<br />
						<Link to="/streams/show">show Streams</Link>
						<br />
						<Link to="/streams/edit">Edit Streams</Link>
					</div>
			</div>
		);
	}
}

export default App;

