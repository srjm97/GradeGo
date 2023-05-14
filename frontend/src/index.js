import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Profile from './views/contact'
import Home from './views/home'
import Login from './views/login'
import Dashboard from './views/dashboard'
import Attendance from './views/attendance'
import FacDashboard from './views/facdashboard'
import TimeTable from './views/timetable'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Profile} exact path="/contact" />
        <Route component={Home} exact path="/" />
        <Route component={Login} exact path="/login" />
        <Route component={Dashboard} exact path="/dashboard"/>
        <Route component={Attendance} exact path="/attendance"/>
        <Route component={FacDashboard} exact path="/facdashboard"/>
        <Route component={TimeTable} exact path="/timetable"></Route>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
