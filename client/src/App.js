import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Other from './Other'
import Fib from './Fib'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other</Link>
        </header>

        <Route exact path="/" component={Fib} />
        <Route path="/otherpage" component={Other} />
      </div>
    </Router>
  )
}

export default App
