import React from 'react';
import Topbar from './components/Topbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
function App() {
  return (
    <>
    <Router>
      <Topbar />
      <Switch>
        <Route path='/' exact component=
        { Home } />
      </Switch>
    </Router>
    </>
  );
}

export default App;
