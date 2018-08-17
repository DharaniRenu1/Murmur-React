import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Welcome from './welcome';
import Login from './RL/login';
import Register from './RL/register';
import Keypair from './key/keypair';
import Friends from './key/friends';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/login" component={Login} />
       <Route exact path="/register" component={Register} />
        <Route exact path="/keypair" component={Keypair} />
         <Route exact path="/friends" component={Friends}/>
    </div>
  </Router>
);

<Router>
<scence key="Welcome" component={Welcome} title="Welcome"/>
<scence key="Login" component={Login}  title="Login"/>
<scence key="Register" component={Register} title="Register"/>
<scence key="Friends" component={Friends} title="Friends"/>
</Router>

 
export default App;

