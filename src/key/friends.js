
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class Friends extends Component {
	constructor(props)
	{
		super(props);
		this.state={
			name1:'',
			name2:'',
			key1:'',
			key2:''
		};
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	validateForm()
	{
		return this.state.name1.length > 0 && this.state.name2.length > 0 && this.state.key1.length > 0 &&this.state.key2.length > 0 ;
	}
	handleChange(key)
	{
			return function(e)
			{
				var state ={};
				state[key]=e.target.value;
				this.setState(state);

			}.bind(this);
	}
	  handleSubmit(event) {
     var data = {
        name1: this.state.name1,
        name2: this.state.name2,
        Key1: this.state.key1,
        Key2: this.state.key2
        }
        alert(data.name1);
         event.preventDefault();
      }

   render() {
      return (
         <div>
         <br/><br/><br /><br/>
           <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
<span style={{width:'350px',textAlign:'center',fontSize:'18px'}}>
For added safety,we recommend you save your back-up phrase with two trusted friends. Enter their public keys below.
</span>
</Grid>
<br /><br />	
 <form onSubmit={this.handleSubmit}>
 <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
<span style={{width:'400px',textAlign:'left'}}>
FRIEND 1
</span>
</Grid>
<br /><br />
 <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>

<table style={{width:'400px'}}>
  <tr>
  <td >
       
     <label>   NAME </label></td>
          <td> </td>
          <td > 
       <input type="text" class="overflow ellipsis" value={this.state.name1} onChange={this.handleChange('name1')} /></td></tr>

         <tr></tr> <tr></tr>  <tr></tr> <tr></tr> <tr></tr>  <tr></tr>
         <tr>
  <td>
       
      <label>      PUBLIC KEY  </label></td>
          <td> </td>
          <td> 
       <input type="text" class="overflow ellipsis" value={this.state.key1} onChange={this.handleChange('key1')}  /></td></tr>
       </table>
</Grid>
<br />
<hr style={{width:'400px'}}/>
<br />
<Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
<span style={{width:'400px',textAlign:'left'}}>
FRIEND 2
</span>
</Grid>
<br /><br />
 <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>

<table style={{width:'400px'}}>
  <tr>
  <td >
       
     <label>   NAME </label></td>
          <td> </td>
          <td > 
       <input type="text" class="overflow ellipsis" value={this.state.name2} onChange={this.handleChange('name2')} /></td></tr>

         <tr></tr> <tr></tr>  <tr></tr> <tr></tr> <tr></tr>  <tr></tr>
         <tr>
  <td>
       
      <label>      PUBLIC KEY  </label></td>
          <td> </td>
          <td> 
       <input type="text" class="overflow ellipsis" value={this.state.key2} onChange={this.handleChange('key2')}  /></td></tr>
       </table>
</Grid>
<br /><br/><br /><br />
 <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>	
<Link to="/"><input type="submit"  disabled={!this.validateForm()} value="FINISHED"  style={{backgroundColor:'#7C2289',height:'40px',width:'120px',border: 'none', color:'white', fontSize:'18px'}}/></Link>

      </Grid>
      </form>
         </div>
      );
   }
}
export default Friends;

