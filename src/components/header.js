import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
  render(){
    const { headerContainer} = styles;
    return(
      <div style={headerContainer}>
        <div><Link to="/" >babatunde</Link></div>
        <div><button>login</button></div>
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