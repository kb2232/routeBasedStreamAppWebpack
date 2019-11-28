import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {testAction} from '../actions';

class App extends React.Component {
	componentDidMount(){
		this.props.testAction();
	}
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
						<Link to="/streams/showlist">Delete Streams</Link>
						<br />
						<Link to="/streams/show">show Streams</Link>
						<br />
						<Link to="/streams/edit">Edit Streams</Link>
					</div>
			</div>
		);
	}
}
const mapstate2props = state=>{
  return {
    test:state.testReducer
  }
}
export default connect(mapstate2props,{testAction})(App);

