import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class Keypair extends Component {
	state = {
    value: '',
    copied: false,
  };
   onChange = ({target: {value}}) => {
    this.setState({value, copied: false});
  };
  onClick = ({target: {innerHTML}}) => {
    console.log(`Clicked on "${innerHTML}"!`); // eslint-disable-line
  };
    onCopy = () => {
    this.setState({copied: true});
  };
   render() {
      return (
         <div>
         <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
<br /><br /><br />
<Typography color="inherit" variant="title" gutterBottom>
      Key pair generated!
      </Typography>
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
       
     <label>     PUBLIC KEY </label></td>
          <td> </td>
          <td > 
       <input type="text" class="overflow ellipsis" readOnly /></td></tr>

         <tr></tr> <tr></tr>  <tr></tr> <tr></tr> <tr></tr>  <tr></tr>
         <tr>
  <td>
       
      <label>     PRIVATE KEY </label></td>
          <td> </td>
          <td> 
       <input type="text" class="overflow ellipsis" readOnly  /></td></tr>
       </table>
       </Grid>
       <br /><br /><br />
               <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
       <Typography color="inherit" variant="title" gutterBottom>
     Back-up pharse:
      </Typography>
      </Grid>
      <br /><br />
                    <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
      <textarea onChange={this.onChange} value={this.state.value} rows="6" style={{width:'350px',borderRadius:'12px' }}>
 
</textarea>  </Grid>
 <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>

      <span style={{width:'350px',textAlign:'right'}}>  <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <img src="https://image.flaticon.com/icons/svg/1057/1057210.svg" height="30" width="30"/>
        </CopyToClipboard></span>
 </Grid> <br/><br/>
 <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
<img src="https://files.slack.com/files-pri/TBW29LHPZ-FC822PQRZ/caution_icon.jpg" width="30" height="30" />

</Grid><br />
 <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
<span style={{width:'350px',textAlign:'center',fontSize:'18px'}}>
  Please note down the backup  pharse  somewhere safe. It is the only way of recovering your account.We will not store this pharse anywhere else.
</span>
 </Grid>
 <br /><br /><br /><br />
 <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
 <Button variant="contained" size="large" style={{ color : 'white', backgroundColor:' #7C2289' }}>
   <Link to="/friends"  style={{ textDecoration: 'none', color : 'white' }}>Next</Link>
      </Button>
      </Grid>
         </div>
      );
   }
}
export default Keypair;
