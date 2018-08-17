import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormGroup, FormControl } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class Login extends Component {
	constructor(props)
	{
		super(props);
		this.state={
			username:'',
			password:''

		};
	 this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
   validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange(key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
    
  }
  handleSubmit(event) {
    var data = {
        username: this.state.username,
        password: this.state.password,
        }
        alert(data.username);
         event.preventDefault();
      }

   render() {
      return (
       <div>
  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
  <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>

  <img src="https://files.slack.com/files-pri/TBW29LHPZ-FC85MS9K4/logo_revelation.jpg" width="100" />
  </Grid>
<br/>  <br/><br/>  <br/>
  <Grid
  container 
  direction="row"
  justify="center"
  alignItems="center"
>
  <div>
  <form onSubmit={this.handleSubmit}><center>
  <table>
  <tr>
  <td>
       
      <label>     USERNAME </label></td>
          <td> </td>
          <td> 
        &nbsp;     &nbsp;     &nbsp;     &nbsp; &nbsp; &nbsp;  <input type="text" value={this.state.username} onChange={this.handleChange('username')} /></td></tr>

         <tr></tr> <tr></tr>  <tr></tr> <tr></tr> <tr></tr>  <tr></tr>
         <tr>
  <td>  
        
        
        <label>
          PASSWORD  </label></td> <td> </td>
          <td> &nbsp;     &nbsp;     &nbsp;     &nbsp; &nbsp; &nbsp;   <input type="password" value={this.state.password} onChange={this.handleChange('password')} /></td></tr>
       
        <br /> </table><br /><br /><br /><br /><br /><br />

       <Link to="/keypair"><input type="submit"  disabled={!this.validateForm()} value="LOGIN"  style={{backgroundColor:'#7C2289',height:'40px',width:'100px',border: 'none', color:'white', fontSize:'18px'}}/></Link>


   </center>
      </form>
      </div>

    
      </Grid>

  </div>
      );
   }
}
export default Login;

