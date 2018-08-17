import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

class Welcome extends Component {

  render() {
    
    return (
      <div className="App">
      <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
  <img src="https://files.slack.com/files-pri/TBW29LHPZ-FC85MS9K4/logo_revelation.jpg" width="100" />
<br />  <br/>  
<Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
<Typography color="inherit" variant="display3" gutterBottom>
      Welcome to 
      Murmur!
      </Typography></Grid>

  <Button variant="contained"  size="large"  style={{ color : 'white', backgroundColor:' #419bf9' }} >
   <Link to="/login"  style={{ textDecoration: 'none', color : 'white'}}>LOGIN</Link>
      </Button>
<br/><br/><br/>
  <Button variant="contained" size="large" color="primary" style={{ color : 'white', backgroundColor:' #419bf9' }}>
   <Link to="/register"  style={{ textDecoration: 'none', color : 'white' }}>REGISTER</Link>
      </Button>
      </div>
    );
  }
}

export default Welcome;

