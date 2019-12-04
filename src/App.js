import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./Pages/home"
import Page1 from "./Pages/Page1"
import PageNotFound from "./Pages/PageNotFound"

/**
 * This Class handles the routing for the website. It uses react-router-dom for routing
 */
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/page1' component={Page1} />
          <Route component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;