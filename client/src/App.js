import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css'
import Home from './components/pages/Home'
import About from './components/pages/About'
import { DataTestIds } from './const'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link data-testid={DataTestIds.Links.HomePage} to="/">Home</Link>
            </li>
            <li>
              <Link data-testid={DataTestIds.Links.AboutPage} to="/about">About</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

export default App
