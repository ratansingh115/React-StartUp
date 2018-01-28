import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,    
    Link} from 'react-router-dom'
import ContentDetails from './ContentDetails';
const Content=()=>(
    <div className="list-group">      
        <Link className="list-group-item"   to="/content/city">City</Link>
        <Link className="list-group-item"  to="/content/sports">Spoorts</Link>
        <Route path="/content/:contentName" component={ContentDetails}> </Route>
    </div>
  )

  export default Content;