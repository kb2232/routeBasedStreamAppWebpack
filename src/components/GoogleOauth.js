import React from 'react';
import Loader from 'react-loader-spinner';
import {connect} from 'react-redux';

import {signIn, signOut} from '../actions';
class GoogleOauth extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isSignedIn:'null',
    }
  }
  componentDidMount(){
    // this is to initialize the lib
    window.gapi.load('client:auth2',()=>{
      window.gapi.client.init({
        clientId: '367925348292-d5p3sv4sl1goedts9ioav9v3lvq2629u.apps.googleusercontent.com',
        scope:'email'
      }).then(()=>{
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    })
  }

  onAuthChange = isSignedIn =>{
    if(isSignedIn) this.props.signIn(this.auth.currentUser.get().getId());
    else this.props.signOut();
  }

  //cause it's called back so use arrow function
  onSignInClick = ()=>{
    this.auth.signIn();
  }
  onSignOutClick = () =>{
    this.auth.signOut();
    window.location.reload();
  }

//gapi.auth2.getAuthInstance().signIn();
  renderAuth(){
    const {signOut, signIn} = styles;
    switch(this.props.isSignedIn){
      case true:
        return <button 
        onClick={this.onSignOutClick}
        style={signOut}
        >Sign Out With Google</button>
      case false:
        return <button 
        onClick={this.onSignInClick}
        style={signIn}
        >Sign In With Google</button>
      default:
        return <Loader 
        type="ThreeDots" 
        color="#00BFFF" 
        height={40} width={40}
        />
    }
  }

  render(){
    return(
      <div>
        {this.renderAuth()}
      </div>
    )
  }
}

const mapstate2props = state =>{
  return{
    isSignedIn: state.authReducer.isSignedIn
  }
}

const styles = {
  signOut:{
    cursor:'pointer',
    backgroundColor:'red'
  },
  signIn:{
    cursor:'pointer',
    backgroundColor:'green'
  }
}

export default connect(mapstate2props,{signIn, signOut})(GoogleOauth);