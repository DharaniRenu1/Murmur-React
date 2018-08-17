import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormGroup, FormControl } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class Register extends Component {
constructor(props)
  {
    super(props);
    this.state={
      name:'',
      username:'',
      password:'',
      confirm_password:'',
      referral:''

    };
   this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0 && this.state.name.length > 0 && this.state.confirm_password.length > 0 && this.state.referral.length;
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
        name: this.state.name,
        username: this.state.username,
        password: this.state.password,
        confirm_password: this.state.confirm_password,
        referral: this.state.referral
        }
        alert(data.username);
         event.preventDefault();

      }
   render() {
      return (
 <div>
         <AppBar position="static" style={{height:60, backgroundColor:"#7C2289"}}>
        <br/>
          <Typography variant="title"  style={{color:"#ffffff"}}>
             &nbsp;  &nbsp;  REGISTER
          </Typography>
         
       
      </AppBar>
      
  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>

<br/>  <br/><br/>  <br/>
  <Grid
  container 
  direction="row"
  justify="center"
  alignItems="center"
>
 
    <form onSubmit={this.handleSubmit}><center>
  <table style={{width:'400px'}}>
  <tr>
  <td >
       
     <label>     NAME </label></td>
          <td> </td>
          <td > 
       <input type="text" value={this.state.name} onChange={this.handleChange('name')} /></td></tr>

         <tr></tr> <tr></tr>  <tr></tr> <tr></tr> <tr></tr>  <tr></tr>
         <tr>
  <td>
       
      <label>     USERNAME </label></td>
          <td> </td>
          <td> 
       <input type="text" value={this.state.username} onChange={this.handleChange('username')} /></td></tr>

         <tr></tr> <tr></tr>  <tr></tr> <tr></tr> <tr></tr>  <tr></tr>
         <tr>
  <td>
       
      <label>     PASSWORD </label></td>
          <td> </td>
          <td> 
       <input type="password" value={this.state.password} onChange={this.handleChange('password')} /></td></tr>

         <tr></tr> <tr></tr>  <tr></tr> <tr></tr> <tr></tr>  <tr></tr>
         <tr>
  <td>  
        
        
        <label>
          CONFIRM PASSWORD  </label></td> <td> </td>
          <td>  <input type="password" value={this.state.confirm_password} onChange={this.handleChange('confirm_password')} /></td></tr>
       
        <tr></tr> <tr></tr>  <tr></tr> <tr></tr> <tr></tr>  <tr></tr>
         <tr>
  <td>
       
      <label>     REFERRAL CODE </label></td>
          <td> </td>
          <td> 
        <input type="text" value={this.state.referral} onChange={this.handleChange('referral')} /></td></tr>

         <tr></tr> <tr></tr>  <tr></tr> <tr></tr> <tr></tr>  <tr></tr></table><br /><br /><br /><br /><br /><br />

     <Link to="/keypair">  <input type="submit" value="LOGIN"  disabled={!this.validateForm()} style={{backgroundColor:'#7C2289',height:'40px',width:'100px',border: 'none', color:'white', fontSize:'18px'}}/></Link>
   </center>
      </form>
      </Grid>

  </div>
      );
   }
}
export default Register;

