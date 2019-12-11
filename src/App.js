import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./Pages/home"
import SearchPage from "./Pages/search"
import PageNotFound from "./Pages/PageNotFound"
import ProtectedRoute from './Components/protectedRoute'

/**
 * This Class handles the routing for the website. It uses react-router-dom for routing
 */
class App extends Component {

  constructor() {
    super()

    this.state = {
      loggedIn: false,
      authKey: null
    }

    this.updateStateLogin = this.updateStateLogin.bind(this)

  }

  // Updates the logged in state. If the status is false then it will log out the user. If the status is true then the user is logged in
  //    with the user_id key
  updateStateLogin(status, key) {
    if(status) {
      this.setState({
        loggedIn: true,
        key: key
      })
    } else{
      this.setState({
        loggedIn: false,
        authKey: null
      })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={ (props) => <Home {...props} handler={this.updateStateLogin}/> } />
          <ProtectedRoute path='/search' component={SearchPage} state={this.state} />
          <Route component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;