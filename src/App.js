import './App.css';
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <div className="nav">
          <Link to='/' style={{ marginRight: '10px' }}>Home</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <Switch>
          <Route path='/' exact>
            <div>Home</div>
          </Route>
          <Route path='/contact' exact>
            <div>Contact</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
