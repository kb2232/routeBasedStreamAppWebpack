import React from 'react';
import {Link} from 'react-router-dom';

import GoogleOauth from './GoogleOauth';

class Header extends React.Component{
  render(){
    const { headerContainer} = styles;
    return(
      <div style={headerContainer}>
        <div><Link to="/" >babatunde</Link></div>
        <div><GoogleOauth /></div>
        <div><button>register</button></div>
        <div><button>streams</button></div>
      </div>
    )
  }
}

const styles={
  headerContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'flex-start'
  }
}

export default Header;