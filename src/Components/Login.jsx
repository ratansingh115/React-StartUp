import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Button,Paper,Typography,TextField,Divider,AppBar,Toolbar} from 'material-ui';
import {
    FormLabel,
    FormControl,
    FormGroup,
    FormControlLabel,
    FormHelperText,
  } from 'material-ui/Form';

import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';
import {Link} from 'react-router-dom';

const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      width:400,
      marginLeft:'40%',
      textAlign:"center"
    }),
  });
  
class Login extends Component{
    constructor(props){
        super(props);
           
    }    
    render(){
        const { classes } = this.props;
        return(
            <Paper className={classes.root} elevation={4}>   
                <AppBar position="static" color="inherit">
                <Toolbar>
                <Typography type="title" color="inherit">
                    Login Here
                </Typography>
                </Toolbar>
            </AppBar>  
                <FormControl  component="fieldset">
                    
                    <FormGroup>
                        <FormControlLabel 
                            control={
                                <TextField
                                id="username"
                                label="Username"
                                placeholder="Enter Username here"
                                className={classes.textField}
                                margin="normal"
                                fullWidth
                                />
                            }
                            label=""
                        />
                        <FormControlLabel
                            control={
                                <TextField
                                id="password"
                                label="Password"
                                placeholder="Enter Password here"
                                className={classes.textField}
                                type="password"                
                                margin="normal"
                                fullWidth                                
                                />
                            }
                            label=""
                            />
                        <FormControlLabel
                            control={
                                <div>
                                <Button className={classes.button} raised color="primary">
                                    Login    &nbsp;                                
                                    <Icon className="material-icons">send</Icon>
                                </Button>  
                                &nbsp;&nbsp;
                                <Button className={classes.button} raised color="primary">
                                    Sign Up  &nbsp;&nbsp;                                  
                                    <Icon className="material-icons">person_add</Icon>
                                </Button> 
                                </div>                           
                            }
                        />
                        <Typography component="h1">Sign In with
                        </Typography>
                        <FormControlLabel                            
                            control={
                                <div>
                                <Button className={classes.button} raised color="primary">                                                                       
                                    facebook                                      
                                </Button>  
                                &nbsp;&nbsp;                            
                                <Button className={classes.button} raised color="secondary">
                                    Google
                                    <Icon className="material-icons">add</Icon>
                                </Button> 
                                
                                </div>                           
                            }
                        />
                    </FormGroup>
                    <FormHelperText>Provide Correct Credantials</FormHelperText>
                </FormControl>             
            </Paper>
            
        )
    }
    
}
Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Login);

