// src/Home.js
import React, { Component } from 'react';
import { withOktaAuth } from '@okta/okta-react';

export defult withOktaAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

async login() {
  this.props.authService.login('/');
}

async logout() {
  this.props.authService.logout('/');
}

render() {
  if (this.props.authState.isPending) return <div>Loding...</div>;
  return this.props.authState.isAthenticated ?
  <button onClick={this.logout}>logout</button> :
  <button onClick={this.login}>Login</button>;
}
  }
);