import React, {Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./Pages/home"
import AccountCreationPage from './Pages/account_creation'
import AboutPage from './Pages/about'
import PageNotFound from "./Pages/pageNotFound"
import SearchHomePage from './Pages/search_home'
import { ProtectedRoute } from './Components/protectedRoute'
import ProfilePage from './Pages/profile_page'
import ProfilePageUpdate from './Pages/profile_page_update'
import PreferencesPage from './Pages/account_create2'
import SearchResultPage from './Pages/search_results'
import StarredTopicsPage from './Pages/starred_topics'

/**
 * This Class handles the routing for the website. It uses react-router-dom for routing
 */
class App extends Component {

  constructor() {
    super()

    this.state = {
      loggedIn: false,
      account: null,
    }

    this.updateStateLogin = this.updateStateLogin.bind(this)

  }

  // Updates the logged in state. If the status is false then it will log out the user. 
  //  If the status is true then the user is logged in
  updateStateLogin(status, account) {
    if(status) {
      this.setState({
        loggedIn: true,
        account: account
      })
    } else {
      this.setState({
        loggedIn: false,
        account: null
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
          <Route path='/results' component={SearchResultPage} />
          <Route path='/createAccount2' component={PreferencesPage}/>
          <Route path='/favorites' component={StarredTopicsPage}/>
          <ProtectedRoute path='/search' component={SearchHomePage} state={this.state} />
          <ProtectedRoute path='/profile' component={ProfilePage} state={this.state} />
          <Route path='/profileupdate' component={ProfilePageUpdate} />
          
          <Route component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;