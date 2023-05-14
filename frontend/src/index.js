import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './style.css'
import Profile from './views/contact'
import Home from './views/home'
import FacDashboard from './views/facdashboard'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Profile} exact path="/contact" />
        <Route component={Home} exact path="/" />
        <Route component={FacDashboard} exact path="/facdashboard"/>
        <Route component={LoginPage} exact path="/LoginPage.js" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
