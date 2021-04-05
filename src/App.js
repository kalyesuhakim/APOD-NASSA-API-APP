import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './components/Home'
import NasaPhoto from './components/NasaPhoto'
import './App.css'
const App = () => {
  
  return (
    <Router>
      <div className="app">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/nasaphoto" exact>
          <NasaPhoto />
        </Route>
      </div>
    </Router>
  )
}

export default App
