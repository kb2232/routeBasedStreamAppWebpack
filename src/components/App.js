import React from 'react';
import {connect} from 'react-redux';
import {testAction} from '../actions';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

  componentDidMount(){
    this.props.testAction();
  }
	render() {
		return (
			<div className="component">
          HI - {this.props.test}
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

