import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default function Pages() {
    return
    <Router>
    <div>
     

      
      <Routes>
        <Route path="/about">
          about
        </Route>
        <Route path="/users">
        users
        </Route>
        <Route path="/">
          home
        </Route>
      </Routes>
    </div>
  </Router>
}