import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import logo from './logo.svg';
import AppBar from 'material-ui/AppBar';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import './App.css';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={NewClient} />
        <Route path='/new' component={Address} />
      </Router>
    );
  }
}

const NewClient = () => <h1> New Client </h1>
const Address = () => <h2> Address </h2>

export default App;
