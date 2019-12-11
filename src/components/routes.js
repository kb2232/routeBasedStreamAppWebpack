import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './App';
import Header from './header';
import CreateStream from './streams/create';
import ShowStream from './streams/show';
import DeleteStream from './streams/delete';
import EditStream from './streams/edit';

const Routes = ()=>{
  return(
    <div>
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/streams/create" exact component={CreateStream} />
          <Route path="/streams/Show" exact component={ShowStream} />
          <Route path="/streams/delete" exact component={DeleteStream} />
          <Route path="/streams/edit" exact component={EditStream} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Routes;