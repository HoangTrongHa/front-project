import React from 'react';
import Topbar from './components/Topbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Login from './components/pages/Login'

function App() {
  return (
    <>
    <Router>
      <Topbar />
      <Switch>
        <Route path='/' exact component=
        { Home } />
        <Route path="/login" component= { Login } />
      </Switch>
    </Router>
    </>
  );
}

export default App;
