import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { MenuItem } from 'material-ui/Menu';

class Links extends Component{
    constructor(props){
        super(props);
    }
    
    
    render(){
        return(
            <div>                
               <MenuItem> <Link  to="/">Home</Link></MenuItem>              
               <MenuItem><Link onClick={this.props.handleClose}   to="/about">About</Link></MenuItem> 
                <MenuItem><Link onClick={this.props.handleClose}  to="/content">Content</Link></MenuItem> 
            </div>
        )   
    }
    
}
export default Links;
  