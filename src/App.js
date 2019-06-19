import React from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><NavLink exact activeClassName="current" to='/home'>Home</NavLink></li>
          <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
          <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Redirect from="/" to= "/home" />
      </Switch>
    </div>
  );
}

export default App;
