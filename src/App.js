import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./Pages/home"
import AccountCreationPage from './Pages/account_creation'
import AboutPage from './Pages/about'
import PageNotFound from "./Pages/PageNotFound"
import SearchHomePage from './Pages/search_home'
import ProtectedRoute from './Components/protectedRoute'
import ProfilePage from './Pages/profile_page'
import ProfilePageUpdate from './Pages/profile_page_update'
import Preferences from './Pages/preferences'
import SearchResultPage from './Pages/search_results'

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
          <Route path='/createAccount' component={AccountCreationPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/testsearch' component={SearchHomePage} />
          <Route path='/results' component={SearchResultPage} />
          <Route path='/testbuttons' component={Preferences}/>
          <ProtectedRoute path='/search' component={SearchHomePage} state={this.state} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/profileupdate' component={ProfilePageUpdate} />
          
          <Route component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;